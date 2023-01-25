import React from 'react';
import Image from 'next/image';

//assets imports
import LeftArrow from '@/public/icons/left-arrow-icon.svg';
import ListRedemptionHistory from '@/components/ListRedemptionHistory';
import ModalSuccess from '@/components/Modal';

interface GrantPointHistoryProps {}

const GrantPointHistory: React.FC<GrantPointHistoryProps> = () => {
  const data = {
    status: 'sent',
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
            <h6>REDEMPTION</h6>
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
