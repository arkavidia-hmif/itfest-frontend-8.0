import Image from 'next/image';
import React from 'react';

const UserPointsHighlight: React.FC = () => {
  return (
    <div
      className="relative flex justify-center
    items-center border-2 border-[#069154] bg-[#E6FEED] rounded-xl w-20 h-6 py-0"
    >
      <Image
        className="absolute -left-2"
        src="/icons/point-highlight.svg"
        alt="Points"
        height={24}
        width={16}
      />
      <p className="font-bold text-[#069154]">20000</p>
    </div>
  );
};

export default UserPointsHighlight;
