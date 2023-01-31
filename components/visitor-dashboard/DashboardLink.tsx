import Link from 'next/link';
import Image from 'next/image';

// Assets import
import RightArrow from '@/public/img/right-arrow.svg';

// Component properties
interface AppProps {
  linkText: string;
  linkURL: string;
}

/**
 * Visitor dashboard link component
 * @param linkText - Visible link text
 * @param linkURL - link URL
 */
export default function DashboardLink({
  linkText,
  linkURL,
}: AppProps): JSX.Element {
  return (
    <Link href={linkURL}>
      <div className="flex h-3.5">
        <p className="capitalize text-[#1F307C] text-xs font-helvetica mr-1.5">
          {linkText}
        </p>
        <Image src={RightArrow} width={5} height={8} alt="" />
      </div>
    </Link>
  );
}
