/* eslint-disable max-len */
'use client';
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

// Assets imports
import SectionImage from '@/public/img/visitor-dashboard-startup-clue.png';
import Image from 'next/image';

// Service imports
import { submitClue, getTries } from '@/services/clue';

// Component properties
interface AppProps {
  showSuccessModal: () => void;
  showFailedModal: () => void;
  getNextClue: () => Promise<void>;
}

/**
 * Input code component
 */
export default function InputCode({
  showSuccessModal,
  showFailedModal,
  getNextClue,
}: AppProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const [remainingTries, setRemainingTries] = useState(10);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getTries();
        setRemainingTries(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const checkHandler = async () => {
    const guess = inputRef.current?.value;

    if (!guess) return;

    const { message } = await submitClue(guess);
    setRemainingTries(remainingTries - 1);

    if (message === 'SUCCESS: ANSWER IS CORRECT') {
      showSuccessModal();
    } else if (
      message === 'SUCCESS: ANSWER IS WRONG' ||
      message === 'SUCCESS: TRIED 3 TIMES'
    ) {
      showFailedModal();
    } else {
      console.log(message);
    }
    // if (guess === answer) {
    //   // TODO: Display modal
    //   setClueDone(true);
    // } else {
    //   // TODO: Display modal
    //   if (tries === 1) {
    //     setClueDone(true);
    //   }

    //   setTries(tries - 1);
    // }
  };

  // const continueHandler = () => {
  //   // TODO: Fetch new clue
  //   console.log('Lanjutkan');
  // };

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
          Sisa percobaan: {remainingTries}
        </p>
        <p
          className={clsx(
            'mt-2 text-body-3',
            remainingTries > 0 ? 'invisible' : ''
          )}
        >
          Kesempatan menjawab sudah habis, silahkan coba lagi di clue
          selanjutnya!
        </p>
        <button
          className="w-full mb-4 mt-28 pt-3 pb-2 bg-arkav-blue rounded-md text-center text-white font-helvetica font-bold text-xs"
          onClick={remainingTries === 0 ? getNextClue : checkHandler}
        >
          {remainingTries === 0 ? 'Lanjutkan' : 'Check'}
        </button>
      </div>
    </section>
  );
}
