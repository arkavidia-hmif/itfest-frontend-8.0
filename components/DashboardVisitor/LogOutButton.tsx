'use client';

import { useAuth } from '@/context/AuthContext';

/**
 * Log out button component
 */
export default function LogOutButton(): JSX.Element {
  const { signOut } = useAuth();
  // Event handler
  const handleLogOut = () => signOut();

  return (
    <button
      onClick={handleLogOut}
      className="w-full bg-[#F43518] text-white rounded-md font-helvetica font-bold text-xs pt-4 pb-3.5 text-center"
    >
      Log Out
    </button>
  );
}
