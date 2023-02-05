/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Assets imports
import ITFestImage from '@/public/img/login-itfest.png';
import Stars1 from '@/public/img/login-stars-1.png';
import Stars2 from '@/public/img/login-stars-2.png';
import EyeHide from '@/public/img/eye-hide-icon.svg';
import EyeShow from '@/public/img/eye-show-icon.svg';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '@/context/AuthContext';

interface LoginProps {
  dummyProp?: any;
}

interface LoginData {
  username: string;
  password: string;
}

const Login: React.FC<LoginProps> = () => {
  const router = useRouter();
  const { signIn } = useAuth();
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: '',
  });
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      await signIn(loginData.username, loginData.password);

      setTimeout(() => {
        router.push('/u/home');
      }, 1500);
    } catch (e) {
      console.error(e);
      toast.error('Login error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full bg-white">
        <div className="bg-home_bg bg-contain min-h-[50vh] bg-[#FEB20E] container">
          <div className="w-full pt-32">
            <div className="relative">
              <div className="absolute left-[6%]">
                <Image src={Stars1} height={75} alt={''}></Image>
              </div>
              <div className="flex justify-center">
                <Image src={ITFestImage} alt={''}></Image>
              </div>
              <div className="absolute bottom-[-5%] right-[6%]">
                <Image src={Stars2} height={75} alt={''}></Image>
              </div>
            </div>
          </div>
          <div className="w-full pt-12">
            <div className="relative">
              <div className="absolute w-3/4 left-1/2 top-4 transform -translate-x-1/2 -translate-y-1/2">
                <p
                  className="drop-shadow-md text-center font-archivo text-white text-[48px] mt-1 z-10"
                  style={{
                    textShadow:
                      '-2.5px 2.5px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000, 1px 1px 0px #000',
                  }}
                >
                  IT FEST
                </p>
                <p className="font-helvetica text-center text-[#0B0A0A] text-xs">
                  Temukan berbagai perusahaan dan start-up untuk eksplorasi
                  kemampuanmu!
                </p>
              </div>
              <svg
                viewBox="0 0 360 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="white"
                  d="M-144 268a324.5 268 0 1 0 649 0a324.5 268 0 1 0 -649 0"
                />
              </svg>
            </div>
          </div>
          <div className="w-full bg-white">
            <form onSubmit={handleSubmit} className="mx-6">
              <p className="font-archivo text-[#0B0A0A] text-[24px]">LOGIN</p>

              <div className="flex flex-col w-full font-helvetica bg-[#F9F9F9] rounded-md p-4">
                <label className="font-bold text-xs mb-1">Username</label>
                <input
                  className="border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleInputChange}
                  placeholder="Masukkan username"
                />
                <div className="relative">
                  <label className="font-bold text-xs mb-1">Password</label>
                  <input
                    type={visible ? 'text' : 'password'}
                    className="relative border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:shadow-outline"
                    id="username"
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    placeholder="Masukkan password"
                  />
                  <span className="absolute right-2 top-1/2 cursor-pointer">
                    {visible ? (
                      <Image
                        src={EyeShow}
                        onClick={() => setVisible(false)}
                        height={16}
                        alt={''}
                      />
                    ) : (
                      <Image
                        src={EyeHide}
                        onClick={() => setVisible(true)}
                        height={16}
                        alt={''}
                      />
                    )}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-[#1F307C] pt-2 pb-1.5 font-helvetica font-bold text-xs text-center 
                text-white mt-4 h-10 tracking-wide disabled:bg-arkav-grey-500 disabled:cursor-default"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Login'}
              </button>

              <p className="font-helvetica font-normal text-xs text-center py-2 text-[#0B0A0A]">
                Don't have an account?{' '}
                <a href="/register">
                  <span className="text-[#1F307C] font-bold">Register</span>
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
