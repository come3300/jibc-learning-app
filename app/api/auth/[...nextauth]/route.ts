import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github' 
import bcrypt from 'bcrypt'
import prisma from '@/app/lib/prisma'


// TODO わからない処理について
/**
adapter: Prismaを使用してデータベースにユーザー情報を保存するための設定です。
providers: 認証プロバイダーのリストです。ここではGoogle認証とメールアドレス・パスワード認証を設定しています。
GoogleProvider: Google認証の設定です。clientId と clientSecret は環境変数から取得します。
CredentialsProvider: メールアドレスとパスワードによる認証の設定です。authorize 関数でユーザーの認証を行います。
authorize: メールアドレスとパスワードを受け取り、ユーザーをデータベースから取得し、パスワードを検証します。
session: セッションの管理方法を設定します。ここではJWTを使用しています。
secret: セッションの暗号化に使用する秘密鍵です。環境変数から取得します。
 */

// NextAuth設定
export const authOptions: NextAuthOptions = {
  // Prismaを使うための設定
  adapter: PrismaAdapter(prisma),
  // 認証プロバイダーの設定 ここにXとかも追加したらそのアカウントでログインできるようになる
  providers: [
    // Google認証
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),

    // メールアドレス認証
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        // メールアドレスとパスワード
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
        // メールアドレスとパスワードがない場合はエラー
        if (!credentials?.email || !credentials?.password) {
          throw new Error('メールアドレスとパスワードが存在しません')
        }

        // ユーザーを取得
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        // ユーザーが存在しない場合はエラー
        if (!user || !user?.hashedPassword) {
          throw new Error('ユーザーが存在しません')
        }

        // パスワードが一致しない場合はエラー
        const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword)

        if (!isCorrectPassword) {
          throw new Error('パスワードが一致しません')
        }

        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
