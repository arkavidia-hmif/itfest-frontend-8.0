import Image from 'next/image';
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="bg-[#069154] flex pt-12 pb-6 pl-4 gap-5">
      <Image
        className="cursor-pointer"
        src="/img/ArrowBack.svg"
        alt="Back button"
        height={8}
        width={8}
      />
      <h6>{title}</h6>
    </div>
  );
};

export default Header;
