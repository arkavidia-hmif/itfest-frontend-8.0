'use client';

import React from 'react';
import Image from 'next/image';

import GreenDiamond from '@/public/icons/green-diamond-icon.svg';
import SadFace from '@/public/icons/sad-face-icon.svg';
import YellowWarning from '@/public/icons/yellow-warning-icon.svg';
import RedCross from '@/public/icons/red-cross-icon.svg';
import ButtonText from './ButtonText';

interface ModalProps {
  status?: string;
  point?: number;
  name?: string;
}

const ModalSuccess: React.FC<ModalProps> = ({ name, point, status }) => {
  return (
    <>
      {status === 'success' && (
        <div className="relative w-80 flex flex-col gap-[20px] items-center ">
          <div>
            <Image
              src={RedCross}
              alt="Red Cross"
              className="fixed top-0 right-0 w-[18px] h-[18px] "
            />
            <Image
              src={GreenDiamond}
              alt="Green Diamond"
              className="w-[65px] h-[94px]"
            />
          </div>
          <div className="flex flex-col items-center font-helvetica text-[#0B1A5C] ">
            <div>{point} Poin Berhasil Diklaim!</div>
            <div className="text-[70%]">
              Selamat! poin berhasil diklaim dari {name}{' '}
            </div>
          </div>
          <ButtonText bgColor="primary"></ButtonText>
        </div>
      )}
      {status === 'fail' && (
        <div className="relative w-80 flex flex-col gap-[20px] items-center ">
          <div>
            <Image
              src={RedCross}
              alt="Red Cross"
              className="fixed top-0 right-0 w-[18px] h-[18px] "
            />
            <Image src={SadFace} alt="Sad Face" className="w-[96px] h-[96px]" />
          </div>
          <div className="flex flex-col items-center font-helvetica text-[#0B1A5C] ">
            <div>Yah, Poin Gagal Diklaim</div>
            <div className="text-[70%]">Silahkan coba lagi</div>
          </div>
          <ButtonText bgColor="secondary"></ButtonText>
        </div>
      )}
      {status === 'warning' && (
        <div className="relative w-80 flex flex-col gap-[20px] items-center ">
          <div>
            <Image
              src={RedCross}
              alt="Red Cross"
              className="fixed top-0 right-0 w-[18px] h-[18px] "
            />
            <Image
              src={YellowWarning}
              alt="Yellow Warning"
              className="w-[96px] h-[96px]"
            />
          </div>
          <div className="flex flex-col items-center font-helvetica text-[#0B1A5C] ">
            <div>Merchandise Akan Ditukar Dengan {point} Poin</div>
            <div className="text-[70%]">
              Apakah kamu yakin ingin menukar poin dari {name}?{' '}
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
