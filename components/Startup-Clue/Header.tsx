import Image from 'next/image';
import Link from 'next/link';

// Assets imports
import HeaderImage from '@/public/img/startup-clue-header.svg';
import LeftArrow from '@/public/icons/navigate-previous.png';

/**
 * Startup clue header section
 */
export default function StartupClueHeader(): JSX.Element {
  return (
    <header className="bg-arkav-green relative">
      <div className="flex w-36 pt-14 pb-6 items-start pl-6 z-20 relative">
        <Link href="/visitor-dashboard">
          <div className="w-6 h-6">
            <Image src={LeftArrow} width={24} height={24} alt="Back arrow" />
          </div>
        </Link>
        <h6 className="ml-4">Startup Clue</h6>
      </div>
      <div className="absolute top-0.5">
        <Image src={HeaderImage} width={360} height={126} alt="" />
      </div>
    </header>
  );
}
