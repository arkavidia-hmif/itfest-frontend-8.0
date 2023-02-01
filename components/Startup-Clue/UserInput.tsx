'use client';
import { useState, useRef } from 'react';
import clsx from 'clsx';

// Assets imports
import SectionImage from '@/public/img/visitor-dashboard-startup-clue.png';
import Image from 'next/image';

// Component properties
interface AppProps {
  answer: string;
}

/**
 * Input code component
 * @param answer - Startup clue answer
 */
export default function InputCode({ answer }: AppProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  // TODO: Fetch from backend
  const [tries, setTries] = useState(3);
  const [isClueDone, setClueDone] = useState(false);

  const checkHandler = () => {
    const guess = inputRef.current?.value;

    if (guess === answer) {
      // TODO: Display modal
      setClueDone(true);
    } else {
      // TODO: Display modal
      if (tries === 1) {
        setClueDone(true);
      }

      setTries(tries - 1);
    }
  };

  const continueHandler = () => {
    // TODO: Fetch new clue
    console.log('Lanjutkan');
  };

  return (
    <section>
      <div className="bg-arkav-yellow mt-5 pt-5 pb-7 px-9 flex justify-between items-center">
        <div>
          <h6 className="rounded-xl w-28">Input Code</h6>
          <p className="mt-3 text-body-3 font-helvetica">
            Masukkan code tebakanmu!
          </p>
        </div>
        <Image src={SectionImage} width={89} height={97} alt="Section image" />
      </div>

      {/* User input */}
      <div className="-mt-4 mx-4 p-3 bg-arkav-grey-200 rounded-lg">
        <p className="text-body-3 font-bold font-helvetica">Code</p>
        <input
          ref={inputRef}
          className="w-full mt-1 outline-none rounded-md border border-[#bfbfbf] text-body-3 font-helvetica p-2 placeholder:text-body-3 placeholder:font-helvetica"
          type="text"
          placeholder="Masukkan code"
        />
      </div>

      <div className="mx-4 mt-3">
        <p className="text-body-3 font-helvetica text-arkav-red">
          Sisa percobaan: {tries}
        </p>
        <p className={clsx('mt-2 text-body-3', tries > 0 ? 'invisible' : '')}>
          Kesempatan menjawab sudah habis, silahkan coba lagi di clue
          selanjutnya!
        </p>
        <button
          className="w-full mb-4 mt-28 pt-3 pb-2 bg-arkav-blue rounded-md text-center text-white font-helvetica font-bold text-xs"
          onClick={isClueDone ? continueHandler : checkHandler}
        >
          {isClueDone ? 'Lanjutkan' : 'Check'}
        </button>
      </div>
    </section>
  );
}
