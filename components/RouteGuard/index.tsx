'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Loading from '../Loading';
interface Props {
  children: React.ReactNode;
  allowedRoles: string[];
}

const RouteGuard: React.FC<Props> = ({ children, allowedRoles }) => {
  const { getUser, isAuthenticated, isLoading } = useAuth();
  const user = getUser();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-arkav-yellow flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!isAuthenticated()) {
    router.push('/login');
    return null;
  }

  if (!allowedRoles.includes(user.role)) {
    switch (user.role) {
      case 'user':
        router.push('/u/dashboard');
        break;
      case 'admin':
        router.push('/a/dashboard');
        break;
      case 'startup':
        router.push('/s/dashboard');
        break;

      default:
        router.push('/login');
        break;
    }
    return null;
  }

  return <>{children}</>;
};

export default RouteGuard;
