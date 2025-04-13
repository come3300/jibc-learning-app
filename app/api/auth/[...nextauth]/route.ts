// import NextAuth, { NextAuthOptions } from 'next-auth';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import bcrypt from 'bcrypt';
// import prisma from '@/app/lib/prisma';

// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         email: { label: 'email', type: 'text' },
//         password: { label: 'password', type: 'password' },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error('メールアドレスとパスワードが存在しません');
//         }
//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         });
//         if (!user || !user?.hashedPassword) {
//           throw new Error('ユーザーが存在しません');
//         }
//         const isCorrectPassword = await bcrypt.compare(
//           credentials.password,
//           user.hashedPassword,
//         );
//         if (!isCorrectPassword) {
//           throw new Error('パスワードが一致しません');
//         }
//         return user;
//       },
//     }),
//   ],
//   session: {
//     strategy: 'jwt',
//   },
//   pages: {
//     signIn: '/signin',
//   },
//   callbacks: {
//     async signIn({ user, account, profile }) {
//       return true;
//     },
//     async redirect({ url, baseUrl }) {
//       return url.startsWith(baseUrl) ? url : baseUrl + '/signin';
//     },
//   },
// };

// console.log('NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET);

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
