import React from 'react';
import Image from 'next/image';

//assets imports
import GreenArrow from '@/public/icons/green-arrow-icon.svg';
import RedArrow from '@/public/icons/red-arrow-icon.svg';
import GreenDiamond from '@/public/icons/green-diamond-icon.svg';
import RedDiamond from '@/public/icons/red-diamond-icon.svg';
import LeftArrow from '@/public/icons/left-arrow-icon.svg';
import ListRedemptionHistory from '@/components/ListRedemptionHistory';

interface GrantPointHistoryProps {}

const GrantPointHistory: React.FC<GrantPointHistoryProps> = () => {
  const data = {
    status: 'received',
    point: 100,
    date: 'tanggal',
    name: 'fikron',
    startup: 'startup',
    total: 10,
  };
  return (
    <>
      <div className="bg-white">
        <div className="flex">
          <div className="mt-5 ml-4">
            <Image src={LeftArrow} alt="Left Arrow" />
          </div>
          <div className="ml-3 mt-5">
            <h6>GRANT POINT</h6>
            <h6>HISTORY</h6>
          </div>{' '}
        </div>
        <div className="mt-5"></div>
        <ListRedemptionHistory
          status={data.status}
          name={data.name}
          point={data.point}
          date={data.date}
          total={data.total}
          startup={data.startup}
        />
      </div>
    </>
  );
};

export default GrantPointHistory;
