// import NextAuth, { AuthOptions } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import GitHubProvider from 'next-auth/providers/github';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// export default prisma;
// export const authOptions: AuthOptions = {
//   providers: [],
//   adapter: PrismaAdapter(prisma),
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     async signIn({ user, account, profile }) {
//       if (!user.email) {
//         console.log('ログイン拒否: メールアドレスが存在しません');
//         return false;
//       }

//       const allowedUser = await prisma.allowedUser.findUnique({
//         where: { email: user.email },
//       });

//       if (!allowedUser) {
//         console.log(`ログイン拒否: ${user.email}`);
//         return false;
//       }

//       console.log(`ログイン成功: ${user.email}`);
//       return true;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.sub as string;
//       }
//       return session;
//     },
//   },
//   session: {
//     strategy: 'jwt',
//   },
//   pages: {
//     signIn: '/auth/signin',
//   },
//   debug: process.env.NODE_ENV === 'development',
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
