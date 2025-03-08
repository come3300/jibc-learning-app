'use client';

import { User } from '@prisma/client';

import Menu from '@/app/components/navigation/Menu';
import Link from 'next/link';

type NavigationProps = {
  currentUser: User | null;
};

const Navigation: React.FC<NavigationProps> = ({ currentUser }) => {
  return (
    <header className="shadow-lg shadow-gray-100">
      <div className="bg-white mx-auto flex items-center justify-between px-20 py-5">
        <Link href="/home" className="cursor-pointer text-xl font-bold">
          offline
        </Link>

        <div className="flex items-center justify-center space-x-2">
          <Menu currentUser={currentUser} />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
