import Image from 'next/image';
import Link from 'next/link';
import ArkavLogo from '@/public/img/arkav-8.0-logo.png';
import QuestionMark from '@/public/img/question-mark.svg';
import UserIcon from '@/public/img/user-icon.svg';
import HeaderImage from '@/public/img/visitor-dashboard-header.png';

export default function Dashboard(): JSX.Element {
  return (
    <>
      {/* Header section */}
      <header className="bg-[#FEB20E] h-[322px] mt-16 pb-20">
        {/* Logo and tutorial button */}
        <div className="flex justify-between pl-8 pr-4">
          <Image src={ArkavLogo} width={22} height={32} alt="Arkavidia Logo" />
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
                Yandy
              </p>
            </div>
            <h1
              style={{
                textShadow:
                  '-2px 2px 0px #000, 1px -1px 0px #000, -1px -1px 0px #000, 1px 1px 0px #000',
              }}
              className="text-2xl leading-[26px]"
            >
              Selamat Datang!
            </h1>
            <div className="bg-black text-white px-2 pb-1 pt-2 w-full mt-1 font-bold font-helvetica text-sm">
              ID PIN: 2020
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
    </>
  );
}
