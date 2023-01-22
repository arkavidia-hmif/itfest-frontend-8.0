import React from "react";
import Image from 'next/image';
import Admin from "./icons/admin.svg";
import Stock from "./icons/stock.svg";
import Link from "next/link";

interface DashboardAdminPageProps {}

const DashboardAdminPage : React.FC<DashboardAdminPageProps> = () => {
    return (
      <div className="h-[100vh] flex flex-col justify-between">
        {/* Upper Half */}
        <div className="bg-[#FEB20E] h-1/2 flex flex-col justify-between pt-14 pb-3">
          <div className="pt-4 flex items-center justify-between px-4 pb-9">
            <Image
              src="/img/arkav-8.0-logo.png"
              alt="arkav-logo"
              width="22"
              height="32"
            />

            <h6 className="font-archivo font-[900] text-2xl tracking-wide">
              ARKAVIDIA
            </h6>
          </div>
          <div className="flex pl-2 pr-4 items-center">
            <div className="w-3/5">
              <div className="flex items-center">
                <Image src={Admin} alt="Administrator Login" />
                <p className="font-helvetica text-xs font-normal ml-1">
                  Administrator
                </p>
              </div>
              <h6 className="font-archivo text-3xl tracking-wide leading-7">
                SELAMAT <br /> DATANG!
              </h6>
            </div>
            <div className="w-2/5 flex justify-end">
              <Image
                src="/img/startup-people.png"
                alt="people"
                width="116"
                height="124"
              />
            </div>
          </div>
          <div className="bg-white flex items-center mx-4 p-4 justify-between rounded-xl ">
            <div className="flex items-center">
              <Image src={Stock} alt="level" width="22" height="32" />
              <p className="font-helvetica text-sm font-bold ml-2">
                Merchandise
              </p>
            </div>
            <Link
              href="/dashboard-startup"
              className="font-helvetica text-xs flex text-[#1f30c7]"
            >
              Lihat Stock
              <Image
                src="/img/navigate-next.png"
                alt="navigate-next"
                width="16"
                height="16"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Half */}
        <div className="bg-[#069154] h-1/2 flex flex-col justify-start">
          <div className="bg-white flex items-center mx-4 mt-4 mb-7 p-4 justify-between rounded-xl ">
            <div className="flex items-center">
              <Image src="/img/level.png" alt="level" width="22" height="32" />
              <p className="font-helvetica text-sm font-bold ml-2">Points</p>
            </div>
            <Link
              href="/dashboard-startup"
              className="font-helvetica text-xs flex text-[#1f30c7]"
            >
              Lihat Riwayat
              <Image
                src="/img/navigate-next.png"
                alt="navigate-next"
                width="16"
                height="16"
              />
            </Link>
          </div>
          <div className="flex flex-col px-4">
            <div className="flex px-4">
              <div className="w-3/5 space-y-2">
                <h6 className="font-archivo text-3xl text-white shadow-black tracking-wide">
                  REDEEM POINTS
                </h6>
                <p className="text-white font-helvetica text-[12px] tracking-wide">
                  Yuk berikan poin kepada visitor yang memainkan challenge!
                </p>
              </div>
              <div className="w-2/5 flex justify-end items-center">
                <Image
                  src="/img/startup-fox.png"
                  alt="fox"
                  width="90"
                  height="98"
                />
              </div>
            </div>
            <div className="p-4">
              <button
                className="bg-white border border-[#1F307C] text-[#1F307C] 
                rounded-md w-full font-helvetica font-bold text-xs py-2 px-4"
              >
                Redeem Points
              </button>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="p-4 bg-white">
          <button
            className="bg-red text-white bg-[#F43518] rounded-md w-full font-helvetica font-bold 
                text-xs py-2 px-4"
          >
            Log Out
          </button>
        </div>
      </div>
    );
};

export default DashboardAdminPage;