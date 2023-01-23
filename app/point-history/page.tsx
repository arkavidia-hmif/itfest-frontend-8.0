import React from 'react';
import Image from 'next/image';

//assets imports
import GreenArrow from '@/public/icons/green-arrow-icon.svg';
import RedArrow from '@/public/icons/red-arrow-icon.svg';
import GreenDiamond from '@/public/icons/green-diamond-icon.svg';
import RedDiamond from '@/public/icons/red-diamond-icon.svg';
import LeftArrow from '@/public/icons/left-arrow-icon.svg';
import ListHistoryPoint from '@/components/ListHistoryPoint';

interface HistoryPointPageProps {}

const HistoryPoint: React.FC<HistoryPointPageProps> = () => {
  const data = {
    status: 'received',
    point: 100,
    date: 'tanggal',
    name: 'fikron',
  };
  return (
    <>
      <div className="bg-white">
        <div className="flex">
          <div className="mt-5 ml-4">
            <Image src={LeftArrow} alt="Left Arrow" />
          </div>
          <div className="ml-3 mt-5">
            <h6>POINT</h6>
            <h6>HISTORY</h6>
          </div>{' '}
        </div>
        <div className="mt-5"></div>
        <ListHistoryPoint
          status={data.status}
          name={data.name}
          point={data.point}
          date={data.date}
        />
      </div>
    </>
  );
};

export default HistoryPoint;
