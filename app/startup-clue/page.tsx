// Component imports
import HeaderSection from '@/components/Startup-Clue/Header';
import ClueSection from '@/components/Startup-Clue/Clue';
import InputSection from '@/components/Startup-Clue/UserInput';
import CompletedPage from '@/components/Startup-Clue/CompletedPage';

export default function StartupClue(): JSX.Element {
  const allClueCompleted = true;

  return (
    <>
      {allClueCompleted ? (
        <CompletedPage />
      ) : (
        <>
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
