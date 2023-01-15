import Login from '@/components/Login';
import React from 'react';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <>
      <p>Login</p>
      <Login />
    </>
  );
};

export default LoginPage;
