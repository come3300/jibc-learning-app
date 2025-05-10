import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '@/app/components/navigation/Navigation';
import AuthContext from '@/app/context/AuthContext';
import ToasterContext from '@/app/context/ToasterContext';
import SignupModal from '@/app/components/modals/SignupModal';
import LoginModal from '@/app/components/modals/LoginModal';
import ProfileModal from '@/app/components/modals/ProfileModal';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Prisma Auth',
  description: 'Prisma Auth',
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <SignupModal />
          <LoginModal />
          <div className="flex min-h-screen flex-col">
            <Layout>{children}</Layout>
            <footer className="py-5">
              <div className="text-center text-sm">offline</div>
            </footer>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
        integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
        crossOrigin="anonymous"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.25.0/tocbot.css"
      />
      <article>{children}</article>
    </>
  );
}
