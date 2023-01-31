'use client';

import React from 'react';
import Image from 'next/image';

import GreenDiamond from '@/public/icons/green-diamond-icon.svg';
import SadFace from '@/public/icons/sad-face-icon.svg';
import YellowWarning from '@/public/icons/yellow-warning-icon.svg';
import RedCross from '@/public/icons/red-cross-icon.svg';
import ButtonText from './ButtonText';

interface ModalProps {
  status?: 'success' | 'fail' | 'warning';
  point?: number;
  name?: string;
}

const ModalSuccess: React.FC<ModalProps> = ({ name, point, status }) => {
  return (
    <>
      {status === 'success' && (
        <div className={"bg-white relative w-[70%] h-[349px] rounded rounded-b-xl flex flex-col gap-[20px]  items-center justify-center pb-4"}>
          <div>
            <Image
              src={RedCross}
              alt="Red Cross"
              className="absolute top-2 right-2 w-[18px] h-[18px] "
            />
            <Image
              src={GreenDiamond}
              alt="Green Diamond"
              className="w-[65px] h-[94px]"
            />
          </div>
          <div
            className="flex flex-col items-center font-helvetica text-[#0B1A5C] border-b-[1px] border-[#DBDDE0
] pb-3"
          >
            <div className="text-[24px]">{point} Poin Berhasil Diklaim!</div>
            <div className="text-[12px]">
              Selamat! poin berhasil diklaim dari {name}{' '}
            </div>
          </div>
          <ButtonText bgColor="primary"></ButtonText>
        </div>
      )}
      {status === 'fail' && (
        <div className="bg-white relative w-[70%] h-[349px] rounded rounded-b-xl flex flex-col gap-[20px] items-center justify-center ">
          <div>
            <Image
              src={RedCross}
              alt="Red Cross"
              className="absolute top-2 right-2 w-[18px] h-[18px] "
            />
            <Image src={SadFace} alt="Sad Face" className="w-[96px] h-[96px]" />
          </div>
          <div
            className="flex flex-col items-center font-helvetica text-[#0B1A5C] border-b-[1px] border-[#DBDDE0
] pb-3"
          >
            <div className="text-[24px]">Yah, Poin Gagal Diklaim</div>
            <div className="text-[12px]">Silahkan coba lagi</div>
          </div>
          <ButtonText bgColor="secondary"></ButtonText>
        </div>
      )}
      {status === 'warning' && (
        <div className="bg-white relative w-[70%] h-[476px] rounded rounded-b-xl flex flex-col gap-[20px] items-center justify-center ">
          <div>
            <Image
              src={RedCross}
              alt="Red Cross"
              className="absolute top-2 right-2 w-[18px] h-[18px] "
            />
            <Image
              src={YellowWarning}
              alt="Yellow Warning"
              className="w-[96px] h-[96px]"
            />
          </div>
          <div
            className="flex flex-col items-center font-helvetica text-[#0B1A5C] border-b-[1px] border-[#DBDDE0
] pb-3"
          >
            <div className="text-[24px] text-center mx-4">
              Merchandise Akan Ditukar Dengan {point} Poin
            </div>
            <div className="text-[12px]">
              Apakah kamu yakin ingin menukar poin dari {name}?{' '}
            </div>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" className="default:ring-2" />
            <div className="font-helvetica font-[400] text-[12px] text-[#F43518]">
              Jangan tampilkan pesan ini lagi
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ButtonText bgColor="primary"></ButtonText>
            <ButtonText bgColor="secondary"></ButtonText>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSuccess;
