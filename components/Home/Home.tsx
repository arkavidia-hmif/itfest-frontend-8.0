/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Assets imports
import ITFestImage from '@/public/img/login-itfest.png';
import Stars1 from '@/public/img/login-stars-1.png';
import Stars2 from '@/public/img/login-stars-2.png';
import QuestionMark from '@/public/img/question-mark.svg';

interface HomeProps {
  dummyProp?: any;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className="w-full">
        <div className="bg-home_bg bg-contain min-h-screen bg-[#FEB20E] relative">
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
          <div className="w-full mt-8">
            <div className="flex flex-col justify-center items-center">
              <p className="font-helvetica font-bold text-normal text-white text-center bg-black w-5/12">
                WELCOME TO
              </p>
              <p
                className="drop-shadow-md text-center font-archivo text-white text-[48px] mt-1 z-10"
                style={{
                  textShadow:
                    '-2.5px 2.5px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000, 1px 1px 0px #000',
                }}
              >
                IT FEST
              </p>
            </div>
          </div>
          <div className="w-full px-6 mt-4">
            <div className="bg-white w-full rounded-xl px-4 py-3 border border-[#EEEDF0]">
              <div className="flex justify-between">
                <div className="flex">
                  <Image width={36} src={QuestionMark} alt={''} />
                  <div className="ml-2">
                    <p className="font-helvetica font-bold text-sm">Tutorial</p>
                    <p className="font-helvetica font-normal text-xs">
                      Selamat datang di IT Fest! <br /> Sebelum memulai
                      eksplorasi, yuk lihat tutorial <br /> tentang eksplorasi
                      IT Fest di Arkavidia!
                    </p>
                  </div>
                </div>
              </div>
              <Link href="#">
                <button className="w-full rounded-md bg-[#1F307C] pt-2 pb-1.5 font-helvetica font-bold text-xs text-center text-white mt-4 h-8 tracking-wide">
                  Lihat Tutorial
                </button>
              </Link>
              <Link href="/login">
                <button className="w-full rounded-md bg-white pt-2 pb-1.5 font-helvetica font-bold text-xs text-center text-[#1F307C] mt-3 h-8 tracking-wide border border-[#1F307C]">
                  Lewati
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
