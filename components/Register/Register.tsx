/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
'use client';

import React, { useEffect, useState } from 'react';
import { register } from '@/services/user';
import Image from 'next/image';
import Link from 'next/link';

// Assets imports
import ITFestImage from '@/public/img/login-itfest.png';
import Stars1 from '@/public/img/login-stars-1.png';
import Stars2 from '@/public/img/login-stars-2.png';
import EyeHide from '@/public/img/eye-hide-icon.svg';
import EyeShow from '@/public/img/eye-show-icon.svg';

interface RegisterProps {
  dummyProp?: any;
}

const Register: React.FC<RegisterProps> = ({ dummyProp }) => {
  useEffect(() => {
    const dummyRegister = async () => {
      const data = await register();
      console.log(data);
    };

    dummyRegister();
  }, []);

  const [visiblePass, setVisiblePass] = useState(false);
  const [visibleConfirmPass, setVisibleConfirmPass] = useState(false);

  return (
    <>
      <div className='w-full bg-white'>
        <div className='bg-home_bg bg-contain min-h-[50vh] bg-[#FEB20E] container'>
          <div className='w-full pt-32'>
            <div className="relative">
              <div className='absolute left-[6%]'>
                <Image src={Stars1} height={75} alt={''}></Image>
              </div>
              <div className='flex justify-center'>
                <Image src={ITFestImage} alt={''}></Image>
              </div>
              <div className='absolute bottom-[-5%] right-[6%]'>
                <Image src={Stars2} height={75} alt={''}></Image>
              </div>
            </div>
          </div>
          <div className='w-full pt-12'>
            <div className="relative">
              <div className="absolute w-3/4 left-1/2 top-4 transform -translate-x-1/2 -translate-y-1/2">
                <p
                  className="drop-shadow-md text-center font-archivo text-white text-[48px] mt-1 z-10"
                  style={
                    {textShadow: '-2.5px 2.5px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000, 1px 1px 0px #000'}
                  }
                  >
                  IT FEST
                </p>
                <p className='font-helvetica text-center text-[#0B0A0A] text-xs'>
                  Temukan berbagai perusahaan dan start-up untuk eksplorasi kemampuanmu!
                </p>
              </div>
              <svg viewBox="0 0 360 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M-144 268a324.5 268 0 1 0 649 0a324.5 268 0 1 0 -649 0" />
              </svg>
            </div>
          </div>
          <div className='w-full bg-white'>
            <div className="mx-6">
              <p className='font-archivo text-[#0B0A0A] text-[24px]'>
                REGISTER
              </p>

              <div className="flex flex-col w-full font-helvetica bg-[#F9F9F9] rounded-md p-4">
                <label className="font-bold text-xs mb-1">
                  Nama
                </label>
                <input className="border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Masukkan nama" />
                <label className="font-bold text-xs mb-1">
                  Username
                </label>
                <input className="border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Masukkan username" />
                <div className="relative">
                  <label className="font-bold text-xs mb-1">
                    Password
                  </label>
                  <input
                  type={(visiblePass) ? 'text' : 'password'}
                  className="relative border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:shadow-outline" id="username" placeholder="Masukkan password" 
                  />
                    <span className='absolute right-2 top-1/2 cursor-pointer'>
                      {(visiblePass) ? (
                        <Image
                        src={EyeShow}
                        onClick={() => setVisiblePass(false)}
                        height={16} alt={''}/>
                      ) : (
                        <Image
                          src={EyeHide}
                          onClick={() => setVisiblePass(true)}
                          height={16} alt={''}/>
                      )}
                    </span>
                </div>
                <div className="relative">
                  <label className="font-bold text-xs mb-1">
                    Konfirmasi Password
                  </label>
                  <input
                  type={(visibleConfirmPass) ? 'text' : 'password'}
                  className="relative border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:shadow-outline" id="username" placeholder="Masukkan password" 
                  />
                    <span className='absolute right-2 top-1/2 cursor-pointer'>
                      {(visibleConfirmPass) ? (
                        <Image
                        src={EyeShow}
                        onClick={() => setVisibleConfirmPass(false)}
                        height={16} alt={''}/>
                      ) : (
                        <Image
                          src={EyeHide}
                          onClick={() => setVisibleConfirmPass(true)}
                          height={16} alt={''}/>
                      )}
                    </span>
                </div>
              </div>

              <Link href="#">
                <button className="w-full rounded-md bg-[#1F307C] pt-2 pb-1.5 font-helvetica font-bold text-xs text-center text-white mt-4 h-10 tracking-wide">
                  Login
                </button>
              </Link>

              <p className="font-helvatica font-normal text-xs text-center py-2 text-[#0B0A0A]">
                  Have an account?{' '}
                  <a href="/login">
                    <span className="text-[#1F307C] font-bold">
                      Login
                    </span>
                  </a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;