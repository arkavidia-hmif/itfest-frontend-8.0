'use client';

import Register from '@/components/Register/Register';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React from 'react';

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated()) router.push('/u/dashboard');

  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
