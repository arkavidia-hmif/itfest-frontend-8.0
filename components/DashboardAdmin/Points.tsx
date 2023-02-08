import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Points = () => {
  return (
    <div className="bg-[#069154] pt-4 px-4 h-1/2 flex flex-col flex-grow">
      <div className="bg-white flex items-center mt-4 mb-7 p-4 justify-between rounded-xl ">
        <div className="flex items-center">
          <Image src="/img/level.png" alt="level" width="22" height="32" />
          <p className="font-helvetica text-sm font-bold ml-2">Points</p>
        </div>
        <Link
          href="/a/history"
          className="font-helvetica font-semibold text-xs flex text-[#1f30c7]"
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

      <div className="flex flex-col">
        <div className="flex px-4">
          <div className="w-3/5 space-y-2">
            <h6>REDEEM POINTS</h6>
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
          <Link href="/a/redeem">
            <button
              className="bg-white border border-[#1F307C] text-[#1F307C] 
                  rounded-md w-full font-helvetica font-bold text-xs py-2 px-4"
            >
              Redeem Points
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Points;
