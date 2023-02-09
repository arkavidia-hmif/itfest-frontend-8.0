'use client';
import { useState, useEffect } from 'react';

// Component imports
import HeaderSection from '@/components/StartupClue/Header';
import ClueSection from '@/components/StartupClue/Clue';
import InputSection from '@/components/StartupClue/UserInput';
import CompletedPage from '@/components/StartupClue/CompletedPage';
import Modal from '@/components/Modal';

// Service imports
import { getClue } from '@/services/clue';

interface ClueData {
  id: number;
  text: string;
}

export default function StartupClue() {
  const [allClueCompleted, setAllCompleted] = useState<boolean>(false);
  const [showSuccessModal, setSuccessModal] = useState<boolean>(false);
  const [showFailedModal, setFailedModal] = useState<boolean>(false);

  const [clueData, setClueData] = useState<ClueData>({
    id: 0,
    text: '',
  });

  const fetchClue = async () => {
    try {
      const { message, data } = await getClue();
      if (message !== 'SUCCESS: GAME IS DONE!') {
        setClueData({
          id: data.id,
          text: data.text,
        });
      } else {
        setAllCompleted(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchClue();
  }, []);

  return (
    <>
      {allClueCompleted ? (
        <CompletedPage />
      ) : (
        <>
          {showSuccessModal ? (
            <div
              onClick={() => setSuccessModal(false)}
              className="bg-arkav-grey-700/50 z-30 h-screen w-full flex items-center fixed top-0 left-0"
            >
              <div className="z-40 w-full flex justify-center">
                <Modal
                  status="success"
                  point={300}
                  icon="green-diamond"
                  scope="submit-clue"
                  onClickLanjutkan={() => {
                    fetchClue();
                    setSuccessModal(false);
                  }}
                />
              </div>
            </div>
          ) : null}
          {showFailedModal ? (
            <div
              onClick={() => setFailedModal(false)}
              className="bg-arkav-grey-700/50 z-30 h-screen w-full flex items-center fixed top-0 left-0"
            >
              <div className="z-40 w-full flex justify-center">
                <Modal
                  status="fail"
                  icon="sad-face"
                  scope="submit-clue"
                  onClickKembali={() => setFailedModal(false)}
                />
              </div>
            </div>
          ) : null}
          <div className="flex flex-col justify-start min-h-screen">
            <HeaderSection />
            <ClueSection clue={clueData.text} />
            <InputSection
              showSuccessModal={() => setSuccessModal(true)}
              showFailedModal={() => setFailedModal(true)}
              getNextClue={() => fetchClue()}
            />
          </div>
        </>
      )}
    </>
  );
}
