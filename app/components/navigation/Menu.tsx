'use client';

import { useCallback, useState } from 'react';
import { signOut } from 'next-auth/react';
import { User } from '@prisma/client';

import useProfileModal from '@/app/hooks/useProfileModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useSignupModal from '@/app/hooks/useSignupModal';
import MenuItem from '@/app/components/navigation/MenuItem';
import Image from 'next/image';

type MenuProps = {
  currentUser: User | null;
};

const Menu: React.FC<MenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const profileModal = useProfileModal();
  const loginModal = useLoginModal();
  const signupModal = useSignupModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="relative h-10 w-10 cursor-pointer" onClick={toggleOpen}>
        <Image
          src={currentUser?.image || '/default.png'}
          className="rounded-full object-cover"
          alt="avatar"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 w-40 overflow-hidden rounded-lg bg-white text-sm shadow-lg shadow-gray-100">
          <div className="cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  label="プロフィール"
                  onClick={() => {
                    profileModal.onOpen();
                    setIsOpen(false);
                  }}
                />
                <MenuItem
                  label="ログアウト"
                  onClick={() => {
                    signOut({ callbackUrl: '/' });
                    setIsOpen(false);
                  }}
                />
              </>
            ) : (
              <>
                <MenuItem
                  label="ログイン"
                  onClick={() => {
                    loginModal.onOpen();
                    setIsOpen(false);
                  }}
                />
                <MenuItem
                  label="サインアップ"
                  onClick={() => {
                    signupModal.onOpen();
                    setIsOpen(false);
                  }}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
