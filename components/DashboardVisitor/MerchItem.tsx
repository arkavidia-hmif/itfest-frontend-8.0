import Image, { StaticImageData } from 'next/image';

// Assets import
import GreenDiamond from '@/public/img/green-diamond.svg';

// Component properties
interface AppProps {
  merchImage: StaticImageData;
  merchTitle: string;
  merchPoints: number;
  startupName: string;
  startupImage: StaticImageData;
  totalStock: number;
}

/**
 * Merch item component
 * @param merchImage - Merchandise image
 * @param merchTitle - Merchandise title
 * @param merchPoints - Points required
 * @param startupName - Startup name
 * @param startupImage - Startup image
 * @param totalStock - Total merch stock
 */
export default function MerchItem({
  merchImage,
  merchTitle,
  merchPoints,
  startupName,
  startupImage,
  totalStock,
}: AppProps): JSX.Element {
  return (
    <div className="rounded-xl overflow-hidden border border-[#EEEDF0] w-[140px] flex-none">
      <Image src={merchImage} width={140} height={129} alt="Merchandise item" />
      <div className="p-2">
        <p className="font-inter text-xs text-[#9B9B9B]">Sisa {totalStock}</p>
        <p className="font-helvetica text-xs mt-2">{merchTitle}</p>
        <div className="flex items-center">
          <Image src={GreenDiamond} width={12} height={17} alt="" />
          <p className="ml-1 font-helvetica text-sm font-bold">{merchPoints}</p>
        </div>

        <div className="flex mt-8">
          <div className="w-5 h-5 rounded-full overflow-hidden">
            <Image
              src={startupImage}
              width={20}
              height={20}
              alt="Startup logo"
            />
          </div>
          <p className="font-helvetica text-xs ml-0.5">{startupName}</p>
        </div>
      </div>
    </div>
  );
}
