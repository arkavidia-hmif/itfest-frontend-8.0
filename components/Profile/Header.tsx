import Image from 'next/image';
import React from 'react';

import ArrowBack from '@/public/img/arrow-back.svg';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="bg-[#ffffff] flex pt-12 pb-6 pl-4 gap-5">
      <Image
      className="cursor-pointer h-1/2 mt-1"
      src={ArrowBack}
      alt="Back button"
      height={8}
      width={8}
      />
      <div className='w-1/2'>
        <h6>{title}</h6>
      </div> 
    </div>
  );
};

export default Header;