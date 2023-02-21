'use client';

import Login from '@/components/Login/Login';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React from 'react';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const router = useRouter();
  const { isAuthenticated, getUser } = useAuth();
  const user = getUser();

  if (isAuthenticated()) {
    switch (user.role) {
      case 'user':
        router.push('/u/home');
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
  }

  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
