'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Component imports
import DashboardLink from '@/components/DashboardVisitor/DashboardLink';
import MerchItem from '@/components/DashboardVisitor/MerchItem';
import LogOutButton from '@/components/DashboardVisitor/LogOutButton';

// Assets imports
import ArkavLogo from '@/public/img/arkav-8.0-logo.png';
import QuestionMark from '@/public/img/question-mark.svg';
import UserIcon from '@/public/img/user-icon.svg';
import HeaderImage from '@/public/img/visitor-dashboard-header.png';
import GreenDiamond from '@/public/img/green-diamond.svg';
import ProfileImage from '@/public/img/visitor-dashboard-profile.png';
import StartupClueImage from '@/public/img/visitor-dashboard-startup-clue.png';
import MerchImage from '@/public/img/visitor-dashboard-merchandise.png';

// TODO: Delete this later
import TestMerchImage from '@/public/img/test-merch-image.png';
import { getCurrentUser, getProfile } from '@/services/user';
import { getAllMerch } from '@/services/merchandise';

interface MerchData {
  merchImage: any;
  merchTitle: string;
  merchPoints: number;
  startupName: string;
  startupImage: any;
  totalStock: number;
}

// Page component
const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState({
    name: '',
    usercode: '',
    points: '',
    isProfileComplete: false,
  });
  const [merch, setMerch] = useState<MerchData[]>([]);

  const fetchUser = async () => {
    const [userRes, profileRes] = await Promise.all([
      getCurrentUser(),
      getProfile(),
    ]);
    const user = userRes.data;
    const profile = profileRes.data;

    setUserData({
      name: user.name,
      usercode: user.usercode,
      points: user.point,
      isProfileComplete: profile.submitted,
    });
  };

  const fetchMerch = async () => {
    const merchRes = await getAllMerch();
    const merchData = merchRes.data;

    const mappedMerch = merchData.map((m: any) => ({
      merchImage: TestMerchImage,
      merchTitle: m.name,
      merchPoints: m.point,
      startupName: 'Startup',
      startupImage: TestMerchImage,
      totalStock: m.stock,
    }));

    setMerch(mappedMerch);
  };

  useEffect(() => {
    fetchUser();
    fetchMerch();
  }, []);

  return (
    <>
      {/* Header section */}
      <header className="bg-[#FEB20E] pt-16 pb-20">
        {/* Logo and tutorial button */}
        <div className="flex justify-between pl-8 pr-4">
          <Image src={ArkavLogo} width={22} height={32} alt="Arkavidia Logo" />
          {/* TODO: Add tutorial link */}
          <Link href="#">
            <button
              className="flex 
            justify-between items-center bg-white w-20 h-8 rounded-md border border-[#1F307C] p-2.5"
            >
              <Image src={QuestionMark} width={12} height={12} alt="" />
              <p className="font-helvetica text-xs text-[#1F307C] mt-1 font-bold">
                Tutorial
              </p>
            </button>
          </Link>
        </div>

        {/* Header text */}
        <div className="flex px-4 justify-between items-center mt-7">
          <div className="w-44">
            <div className="flex">
              <Image src={UserIcon} width={12} height={12} alt="" />
              <p className="ml-1.5 mt-1.5 uppercase font-helvetica text-sm items-center">
                {userData.name}
              </p>
            </div>
            <h6
              style={{
                textShadow:
                  '-2px 2px 0px #000, 1px -1px 0px #000, -1px -1px 0px #000, 1px 1px 0px #000',
              }}
              className="text-2xl leading-[26px]"
            >
              Selamat Datang!
            </h6>
            <div className="bg-black text-white px-2 pb-1 pt-2 w-full mt-1 font-bold font-helvetica text-sm">
              ID PIN: {userData.usercode}
            </div>
          </div>

          {/* Header image */}
          <Image
            src={HeaderImage}
            width={116}
            height={125}
            alt="Header image"
          />
        </div>
      </header>

      {/* Points and profile section */}
      <section className="bg-white w-full px-4">
        <div className="relative -top-12">
          {/* Points card */}
          <div className="bg-white w-full rounded-xl px-4 py-3 border border-[#EEEDF0]">
            <div className="flex justify-between">
              <div className="flex">
                <Image src={GreenDiamond} width={22} height={32} alt="" />
                <div className="ml-2">
                  <p className="font-helvetica font-bold text-sm">Points</p>
                  <p className="font-helvetica text-xs">
                    Jumlah poinmu saat ini:
                  </p>
                </div>
              </div>
              <DashboardLink linkText="Lihat Riwayat" linkURL="/u/history" />
            </div>
            <p className="font-varela font-bold text-3xl text-center mt-2">
              {userData.points}
            </p>
          </div>

          {/* Profile card */}
          <div className="flex bg-white w-full rounded-xl py-3 px-4 border border-[#EEEDF0] mt-2">
            <Image
              src={ProfileImage}
              width={86}
              height={94}
              alt="Profile image"
            />
            <div className="w-[197px] ml-5">
              <p className="font-helvetica font-bold text-sm">
                {userData.isProfileComplete
                  ? 'Profil sudah lengkap'
                  : 'Profil belum lengkap'}
              </p>
              <p className="mt-1 font-helvetica text-xs">
                {userData.isProfileComplete
                  ? 'Klik di sini untuk mengubah data profil'
                  : 'Lengkapi profilmu dan raih hadiah X points!'}
              </p>
              <Link href="/u/profile">
                <button
                  className="w-full bg-[#1F307C] rounded-md pt-2 pb-1.5 
                text-white font-helvetica font-bold text-xs text-center mt-2"
                >
                  {userData.isProfileComplete
                    ? 'Ubah Profil'
                    : 'Lengkapi Profil'}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Startup clue section */}
      <section className="w-full bg-[#069154] -mt-10 py-4 px-8">
        <div className="flex">
          <div>
            <h6
              style={{
                textShadow:
                  '-2px 2px 0px #000, 1px -1px 0px #000, -1px -1px 0px #000, 1px 1px 0px #000',
              }}
              className="font-archivo font-black uppercase text-2xl w-40 leading-[26px]"
            >
              Startup Clue
            </h6>
            <p className="mt-3 text-white font-helvetica text-xs">
              Tebak kode dari tiap startup dan menangkan hadiahnya!
            </p>
          </div>
          <Image
            src={StartupClueImage}
            width={89}
            height={97}
            alt="Startup clue image"
          />
        </div>

        <Link href="/u/clue">
          <button
            className="capitalize w-full bg-white rounded-md 
          border border-[#1F307C] pt-2 pb-1.5 font-helvetica font-bold text-xs text-center text-[#1F307C] mt-4"
          >
            Lihat Clue
          </button>
        </Link>
      </section>

      {/* Merchandise section */}
      <section className="pl-4 pt-4 flex bg-white justify-between max-w-full">
        <div className="bg-white mr-2 pb-1 w-36 border border-[#110002] flex flex-col items-center flex-none">
          <div className="bg-[#0B0A0A] pt-1 w-full">
            <p className="uppercase font-helvetica font-bold text-white text-sm text-center">
              Merchandise
            </p>
          </div>
          <p className="font-helvetica text-xs text-justify mt-3 px-2.5 mb-3.5">
            Banyak merchandise menarik yang dapat kamu tukarkan!
          </p>
          <Image
            src={MerchImage}
            width={134}
            height={174}
            alt="Merchandise section image"
          />
        </div>

        <div className="flex flex-col overflow-auto flex-grow">
          <div className="flex justify-start mr-6">
            <DashboardLink
              linkText="Lihat Selengkapnya"
              linkURL="/u/catalogue"
            />
          </div>
          <div className="flex gap-1 mt-1 overflow-x-auto">
            {merch.map((merch, idx) => (
              <MerchItem key={idx} {...merch} />
            ))}
          </div>
        </div>
      </section>

      {/* Log out button */}
      <div className="bg-white w-full px-4 pt-8 pb-4">
        <LogOutButton />
      </div>
    </>
  );
};

export default Dashboard;
