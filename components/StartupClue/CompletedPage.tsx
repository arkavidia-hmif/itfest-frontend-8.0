import Image from "next/image";
import Link from "next/link";

// Assets imports
import SectionImage from "@/public/img/startup-clue-completed.png"
import Stars1 from '@/public/img/login-stars-1.png';
import Stars2 from '@/public/img/login-stars-2.png';

/**
 * Completed startup clue page
 */
export default function CompletedPage(): JSX.Element {
  return (
    <section className="bg-[url('../public/img/startup-clue-background.svg')] flex flex-col items-center px-7 min-h-screen relative">
      <div className='absolute left-[6%] top-[136px]'>
        <Image src={Stars1} height={75} alt={''}></Image>
      </div>
      <Image className="mt-52" src={SectionImage} width={191} height={209} alt="Startup clue completed"/>
      <div className='absolute right-[6%] top-[384px]'>
        <Image src={Stars2} height={75} alt={''}></Image>
      </div>

      <h6 className="mt-7 text-center w-[258px]">Semua Clue Telah Terjawab!</h6>
      <p className="text-body-3 font-helvetica text-center text-white mt-6">Selamat! Kamu berhasil menjawab semua clue.<br/> Silakan kembali untuk menukarkan poin dengan merchandise!</p>
      <Link href="/visitor-dashboard">
        <button className="mt-4 mb-6 w-72 bg-white border border-arkav-blue rounded-md py-2 font-helvetica font-bold text-xs text-center text-arkav-blue">Kembali ke Dashboard</button>
      </Link>
    </section>
  )
}