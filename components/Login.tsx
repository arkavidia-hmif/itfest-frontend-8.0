'use client';

import React, { useEffect } from 'react';
import { login } from '@/services/user';

interface LoginProps {
  dummyProp?: any;
}

const Login: React.FC<LoginProps> = ({ dummyProp }) => {
  useEffect(() => {
    const dummyLogin = async () => {
      const data = await login();
      console.log(data);
    };

    dummyLogin();
  }, []);

  return (
    <>
      <p>Login</p>
      <p>{dummyProp || 'Dummy'}</p>
    </>
  );
};

export default Login;
