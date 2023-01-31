'use client';

import React from 'react';
import clsx from 'clsx';
interface ButtonTextProps {
  bgColor?: string;
  onClick?: () => void;
}

type colors = 'primary' | 'secondary';

const variantColors: { [key in colors]: string } = {
  primary: 'bg-[#1F307C] text-[#FFFFFF]',
  secondary: 'bg-[#FFFFFF] text-[#1F307C] border-[2px] border-[#1F307C]',
};

const ButtonText: React.FC<ButtonTextProps> = ({ bgColor, onClick }) => {
  return (
    <>
      <div>
        <button
          onClick={onClick}
          className={clsx(
            'rounded-xl bg-[#1F307C] text-[#FFFFFF] w-[185px] h-[48px]',
            variantColors[bgColor]
          )}
        >
          {bgColor === 'secondary' && (
            <div className="font-helvetica font-bold text-[16px] text-[#1F307C]">
              Kembali
            </div>
          )}
          {bgColor === 'primary' && (
            <div className="font-helvetica font-bold text-[16px] text-[#FFFFFF]">
              Lanjutkan
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default ButtonText;
