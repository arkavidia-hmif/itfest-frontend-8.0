'use client';

import { useAuth } from '@/context/AuthContext';
import React from 'react';

const LogoutButton = () => {
  const { signOut } = useAuth();
  return (
    <div className="flex w-full p-4">
      <button
        onClick={() => signOut()}
        className="text-white bg-[#F43518] rounded-md w-full font-helvetica font-bold 
            text-xs py-4 px-[7.5rem]"
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;
