'use client';

import React from 'react';
import Image from 'next/image';

import GreenArrow from '@/public/icons/green-arrow-icon.svg';
import RedArrow from '@/public/icons/red-arrow-icon.svg';
import GreenDiamond from '@/public/icons/green-diamond-icon.svg';
import RedDiamond from '@/public/icons/red-diamond-icon.svg';

interface ListHistoryPointProps {
  status?: string;
  point?: number;
  date?: string;
  name?: string;
}

const ListHistoryPoint: React.FC<ListHistoryPointProps> = ({
  name,
  point,
  status,
  date,
}) => {
  return (
    <>
      <div className="px-[16px] py-[16px]">
        <div className="flex gap-[12px]">
          <div className="translate-y-1">
            {status === 'received' && (
              <Image src={GreenArrow} alt="Green Arrow" />
            )}
            {status === 'sent' && <Image src={RedArrow} alt="Red Arrow" />}
          </div>
          <div className="flex justify-between w-[352px] h-[28px]">
            <div className="flex flex-col">
              <div className="font-helvetica font-black text-[12px]">
                {status === 'received' ? 'Diterima dari' : 'Dikirim ke '}
              </div>
              <div className="font-helvetica font-[400] text-[12px]">
                {name}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-helvetica font-[400] text-[12px] text-[#9B9B9B]">
                {date}
              </div>
              <div className="flex gap-1">
                <div className="translate-y-1">
                  {status === 'received' && (
                    <Image src={GreenDiamond} alt="Green Diamond" />
                  )}
                  {status === 'sent' && (
                    <Image src={RedDiamond} alt="Red Diamond" />
                  )}
                </div>
                <div
                  className={
                    'font-helvetica font-[700] text-[12px]' +
                    (status === 'received'
                      ? ' text-[#069154]'
                      : ' text-[#F43518]')
                  }
                >
                  {point}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListHistoryPoint;
