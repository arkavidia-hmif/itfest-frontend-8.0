'use client';

import { getCurrentUser } from '@/services/user';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const UserPointsHighlight: React.FC = () => {
  const [points, setPoints] = useState(0);

  const fetchPoints = async () => {
    try {
      const res = await getCurrentUser();
      const data = res.data;

      setPoints(data.point);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPoints();
  }, []);

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
      <p className="font-bold text-[#069154]">{points}</p>
    </div>
  );
};

export default UserPointsHighlight;
