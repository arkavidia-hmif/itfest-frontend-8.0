import Image from 'next/image';
import React from 'react';

import ArrowBack from '@/public/img/arrow-back.svg';
import Link from 'next/link';
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="bg-[#ffffff] flex pt-12 pb-6 pl-4 gap-5">
      <Link 
        className='h-min'
        href={'/u/dashboard'}>
        <Image
        className="cursor-pointer h-1/2"
        src={ArrowBack}
        alt="Back button"
        height={8}
        width={8}
        />
      </Link>
        <div className='w-1/2'>
          <h6>{title}</h6>
        </div> 
    </div>
  );
};

export default Header;