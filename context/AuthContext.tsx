'use client';

import { getCurrentUser, login } from '@/services/user';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface UserData {
  usercode: string;
  role: string;
}

interface AuthContextData {
  getUser: () => UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
  getToken: () => string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  isAuthenticated: () => boolean;
  // eslint-disable-next-line no-unused-vars
  signIn: (username: string, password: string) => void;
  signOut: () => void;
  isLoading: boolean;
}

interface ContextProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<ContextProps> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState({} as UserData);
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Set token to local storage everytime token changes
  useEffect(() => {
    if (token) localStorage.setItem('token', token);
  }, [token]);

  const retrieveUser = async () => {
    let userToken;
    if (typeof window !== 'undefined') {
      userToken = localStorage.getItem('token');
    }

    if (userToken) {
      setToken(userToken);
      try {
        const res = await getCurrentUser();
        const user = res.data;
        setUser({
          usercode: user.usercode,
          role: user.role,
        });
      } catch (error) {
        console.error('Error', error);
        setToken('');
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    retrieveUser();
  }, []);

  async function signIn(username: string, password: string) {
    const res = await login(username, password);

    if (res.message !== 'SUCCESS') throw new Error('Login Error');

    const dataToken = res.data;
    setToken(dataToken);
    localStorage.setItem('token', dataToken);
    const userRes = await getCurrentUser();
    const userData = userRes.data;

    setUser({
      usercode: userData.usercode,
      role: userData.role,
    });

    toast.success('Success!');
  }

  function signOut() {
    setUser({} as UserData);
    setToken('');
    localStorage.removeItem('token');
    router.push('/login');
  }

  return (
    <AuthContext.Provider
      value={{
        getUser: () => user,
        setUser,
        getToken: () => token,
        setToken,
        isAuthenticated: () => token !== '',
        signIn,
        signOut,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
