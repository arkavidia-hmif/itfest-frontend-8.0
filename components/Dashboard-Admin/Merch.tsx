import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// import Link from "next/link";

const Merch = () => {
  return (
    <div className="bg-[#FEB20E] pt-14 px-4 h-1/2 flex flex-col justify-between">
      <div className="flex items-center justify-between mt-4 mb-9 ml-4">
        <Image
          src="/img/arkav-8.0-logo.png"
          alt="arkav-logo"
          width="22"
          height="32"
        />
        <h6 className="font-archivo font-[900] text-3xl tracking-wide">
          ARKAVIDIA
        </h6>
      </div>

      <div className="flex items-center">
        <div className="w-3/5">
          <div className="flex items-center">
            <Image src="/icons/dashboard-admin.svg" width={22} height={32} alt="Administrator Login" />
            <p className="font-helvetica text-xs font-semibold ml-1">
              ADMINISTRATOR
            </p>
          </div>
          <h6>
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

      <div className="bg-white flex items-center mt-8 mb-4 p-4 justify-between rounded-xl ">
        <div className="flex items-center">
          <Image
            src="/icons/dashboard-stock.svg"
            alt="level"
            width="22"
            height="32"
          />
          <p className="font-helvetica text-sm font-bold ml-2">Merchandise</p>
        </div>
        <Link
          href="/dashboard-startup"
          className="font-helvetica font-semibold text-xs flex text-[#1f30c7]"
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
  );
};

export default Merch;