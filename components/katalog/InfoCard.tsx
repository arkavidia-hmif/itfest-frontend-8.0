import Image from 'next/image';
import React from 'react';

interface InfoCardProps {
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ children }) => {
  return (
    <div className="p-3 bg-[#F9F9F9] border border-[#FEB20E] rounded-lg flex items-center gap-3">
      <Image src="/icons/info-yellow.svg" alt="Info" height={24} width={24} />
      <p>{children}</p>
    </div>
  );
};

export default InfoCard;
