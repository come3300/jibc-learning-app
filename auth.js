import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ user, account, profile }) {
      // メールアドレスでログイン可能かをチェック
      const allowedUser = await prisma.allowedUser.findUnique({
        where: { email: user.email },
      });

      if (!allowedUser) {
        // 許可されていない場合、ログインを拒否
        console.log(`ログイン拒否: ${user.email}`);
        return false;
      }

      console.log(`ログイン成功: ${user.email}`);
      return true;
    },
    async session({ session, token }) {
      // セッション情報にユーザーIDを追加
      if (session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt", // JWTセッション
  },
  pages: {
    signIn: "/auth/signin", // ログインページをカスタマイズ（オプション）
  },
  debug: process.env.NODE_ENV === "development", // デバッグモード
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
