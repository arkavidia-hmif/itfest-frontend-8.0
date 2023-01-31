import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="pt-[44px] flex flex-row bg-[#1F307C] px-4 relative">
      <div className="flex flex-row pb-7 gap-3 items-center">
        <Image
          src="/icons/left-arrow.svg"
          width={24}
          height={24}
          alt="Left Arrow"
        />
        <h6>MERCHANDISE</h6>
      </div>
    </div>
  );
};

export default Header;