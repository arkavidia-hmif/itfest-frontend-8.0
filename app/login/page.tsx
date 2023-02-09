'use client';

import Login from '@/components/Login/Login';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React from 'react';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated()) router.push('/u/dashboard');

  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
