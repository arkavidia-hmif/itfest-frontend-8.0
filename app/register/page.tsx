'use client';

import Register from '@/components/Register/Register';
// import { useAuth } from '@/context/AuthContext';
// import { useRouter } from 'next/navigation';
import React from 'react';

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  // const router = useRouter();
  // const { isAuthenticated, getUser } = useAuth();
  // const user = getUser();

  // if (isAuthenticated()) {
  //   switch (user.role) {
  //     case 'user':
  //       router.push('/u/dashboard');
  //       break;
  //     case 'admin':
  //       router.push('/a/dashboard');
  //       break;
  //     case 'startup':
  //       router.push('/s/dashboard');
  //       break;

  //     default:
  //       router.push('/login');
  //       break;
  //   }
  // }

  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
