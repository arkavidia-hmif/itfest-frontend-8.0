'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

// Image assets
import tutorImage1 from '@/public/img/tutorial/tutorial-1.jpg';
import tutorImage2 from '@/public/img/tutorial/tutorial-2.jpg';
import tutorImage3 from '@/public/img/tutorial/tutorial-3.jpg';
import tutorImage4 from '@/public/img/tutorial/tutorial-4.jpg';

const TutorialPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-white flex pt-12 pb-6 pl-4 gap-5">
        <Image
          className="cursor-pointer"
          src="/img/arrow-back.svg"
          alt="Back button"
          height={8}
          width={8}
          onClick={() => router.push('/u/dashboard')}
        />
        <h6>Tutorial</h6>
      </div>
      <Image src={tutorImage1} alt="Tutorial page 1" />
      <Image src={tutorImage2} alt="Tutorial page 2" />
      <Image src={tutorImage3} alt="Tutorial page 3" />
      <Image src={tutorImage4} alt="Tutorial page 4" />
    </>
  );
};

export default TutorialPage;
