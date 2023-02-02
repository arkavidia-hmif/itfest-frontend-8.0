import React from 'react';
import Image from 'next/image';
import EnterPinField from '@/components/EnterPin';

//assets imports
import LeftArrow from '@/public/icons/left-arrow-icon.svg';
interface EnterPinProps {}

const EnterPin: React.FC<EnterPinProps> = () => {
  return (
    <>
      <div className="bg-white flex flex-col">
        <div className="flex">
          <div className="mt-5 ml-4">
            <Image src={LeftArrow} alt="Left Arrow" />
          </div>
          <div className="ml-3 mt-5">
            <h6>ENTER PIN</h6>
          </div>{' '}
        </div>
        <div className="self-center">
          <EnterPinField />
        </div>
        <div className="mt-5"></div>
      </div>
    </>
  );
};

export default EnterPin;
