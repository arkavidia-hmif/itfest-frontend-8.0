'use client';
// Component imports
import HeaderSection from '@/components/Startup-Clue/Header';
import ClueSection from '@/components/Startup-Clue/Clue';
import InputSection from '@/components/Startup-Clue/UserInput';
import CompletedPage from '@/components/Startup-Clue/CompletedPage';
import Modal from '@/components/Modal';

export default function StartupClue(): JSX.Element {
  const allClueCompleted = false;
  const showSuccessModal = false;
  const showFailedModal = false;

  return (
    <>
      {allClueCompleted ? (
        <CompletedPage />
      ) : (
        <>
          {showSuccessModal ? (
            <div className="bg-arkav-grey-700/50 z-30 h-screen w-full flex items-center fixed top-0 left-0">
              <div className="z-40 w-full flex justify-center">
                <Modal
                  status="success"
                  point={300}
                  icon="green-diamond"
                  scope="submit-clue"
                  onClick={() => console.log('Lanjutkan')}
                />
              </div>
            </div>
          ) : null}
          {showFailedModal ? (
            <div className="bg-arkav-grey-700/50 z-30 h-screen w-full flex items-center fixed top-0 left-0">
              <div className="z-40 w-full flex justify-center">
                <Modal
                  status="fail"
                  icon="sad-face"
                  scope="submit-clue"
                  onClick={() => console.log('Kembali')}
                />
              </div>
            </div>
          ) : null}
          <HeaderSection />
          <ClueSection {...testData} />
          <InputSection answer="2021" />
        </>
      )}
    </>
  );
}

const testData = {
  clue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor faucibus elementum. Cras a felis auctor, malesuada enim nec, viverra leo. Nulla mollis, lorem a hendrerit iaculis, justo diam tincidunt tortor, lobortis aliquet arcu justo ut enim. Donec mollis erat odio, nec viverra felis pretium ut. Aenean pulvinar ipsum quam, vitae gravida nibh ornare ac. Quisque gravida massa in sapien vulputate, eget blandit augue faucibus. In mollis feugiat dolor in congue. Donec risus nisl, tempus vel ex eget, hendrerit rutrum ex. Praesent interdum augue quis sodales tempus.',
};
