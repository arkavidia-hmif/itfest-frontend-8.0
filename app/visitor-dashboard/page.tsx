import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

// Component imports
import DashboardLink from '@/components/visitor-dashboard/DashboardLink';
import MerchItem from '@/components/visitor-dashboard/MerchItem';
import LogOutButton from '@/components/visitor-dashboard/LogOutButton';

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

// Page component
export default function Dashboard(): JSX.Element {
  const { username, userPIN, userPoints, isProfileComplete, merchandise } =
    testData;

  return (
    <>
      {/* Header section */}
      <header className="bg-[#FEB20E] pt-16 pb-20">
        {/* Logo and tutorial button */}
        <div className="flex justify-between pl-8 pr-4">
          <Image src={ArkavLogo} width={22} height={32} alt="Arkavidia Logo" />
          {/* TODO: Add tutorial link */}
          <Link href="#">
            <button className="flex justify-between items-center bg-white w-20 h-8 rounded-md border border-[#1F307C] p-2.5">
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
                {username}
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
              ID PIN: {userPIN}
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
              {/* TODO: Add history link */}
              <DashboardLink linkText="Lihat Riwayat" linkURL="#" />
            </div>
            <p className="font-varela text-3xl text-center mt-2">
              {userPoints}
            </p>
          </div>

          {/* Profile card */}
          <div
            className={clsx(
              isProfileComplete ? 'hidden' : 'flex',
              'bg-white w-full rounded-xl py-3 px-4 border border-[#EEEDF0] mt-2'
            )}
          >
            <Image
              src={ProfileImage}
              width={86}
              height={94}
              alt="Profile image"
            />
            <div className="w-[197px] ml-5">
              <p className="font-helvetica font-bold text-sm">
                Profil belum lengkap
              </p>
              <p className="mt-1 font-helvetica text-xs">
                Lengkapi profilmu dan raih hadiah X points!
              </p>
              {/* TODO: Add profile link */}
              <Link href="#">
                <button className="w-full bg-[#1F307C] rounded-md pt-2 pb-1.5 text-white font-helvetica font-bold text-xs text-center mt-2">
                  Lengkapi profil
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

        {/* TODO: Add clue link */}
        <Link href="#">
          <button className="capitalize w-full bg-white rounded-md border border-[#1F307C] pt-2 pb-1.5 font-helvetica font-bold text-xs text-center text-[#1F307C] mt-4">
            Lihat Clue
          </button>
        </Link>
      </section>

      {/* Merchandise section */}
      <section className="pl-4 pt-4 flex bg-white justify-between overflow-hidden">
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

        <div>
          <div className="flex justify-end mr-6">
            {/* TODO: Add merch link */}
            <DashboardLink linkText="Lihat Selengkapnya" linkURL="#" />
          </div>
          <div className="flex gap-1 mt-1 overflow-scroll w-[56vw]">
            {merchandise.map((merch, idx) => (
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
}

// Dummy data for merchandise section
const testMerchData = [
  {
    merchImage: TestMerchImage,
    merchTitle: 'Kaos Mentor Sandbox',
    merchPoints: 100000,
    startupName: 'Startup Startip',
    startupImage: TestMerchImage,
    totalStock: 59,
    totalSold: 10,
  },
  {
    merchImage: TestMerchImage,
    merchTitle: 'Kaos Mentor Sandbox',
    merchPoints: 100000,
    startupName: 'Startup Startip',
    startupImage: TestMerchImage,
    totalStock: 59,
    totalSold: 10,
  },
  {
    merchImage: TestMerchImage,
    merchTitle: 'Kaos Mentor Sandbox',
    merchPoints: 100000,
    startupName: 'Startup Startip',
    startupImage: TestMerchImage,
    totalStock: 59,
    totalSold: 10,
  },
];

// Dummy page data
const testData = {
  username: 'Yandy',
  userPIN: 2020,
  userPoints: 99999,
  isProfileComplete: false,
  merchandise: testMerchData,
};
