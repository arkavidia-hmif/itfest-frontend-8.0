import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface DashboardStartupPageProps { }

const DashboardStartupPage: React.FC<DashboardStartupPageProps> = () => {
    return (
        <div className='h-[calc(100vh)] flex flex-col justify-between'>
            <div className="flex flex-col justify-between h-full">
                <div className="bg-[#FEB20E] h-1/2 flex flex-col justify-center">
                    <div className='pt-4 flex items-center justify-between px-4 pb-9'>
                        <Image src="/img/arkav-8.0-logo.png" alt="arkav-logo" width="40" height="40" />
                        <h1 className='font-archivo text-2xl text-white shadow-black'>ARKAVIDIA</h1>
                    </div>
                    <div className='flex px-4'>
                        <div className='w-3/5'>
                            <div className='flex items-center'>
                                <Image src="/icons/business-center.png" alt="business-center" width="12" height="12" />
                                <p className='font-helvetica text-xs ml-1'>STARTUP</p>
                            </div>
                            <h1 className='font-archivo text-2xl text-white shadow-black'>SELAMAT</h1>
                            <h1 className='font-archivo text-2xl text-white shadow-black'>DATANG!</h1>
                            <div className='bg-black w-full text-white font-helvetica text-sm px-1'>
                                USERNAME
                            </div>
                        </div>
                        <div className='w-2/5 flex justify-end'>
                            <Image src="/img/startup-people.png" alt="people" width="116" height="124" />
                        </div>
                    </div>
                </div>
                <div className="[background:linear-gradient(#FEB20E_50%,#069154_50%)]">
                    <div className='bg-white flex items-center mx-4 p-4 justify-between rounded-xl '>
                        <div className='flex items-center'>
                            <Image src="/img/level.png" alt="level" width="22" height="32" />
                            <p className='font-helvetica text-sm font-bold ml-2'>Points</p>
                        </div>
                        <Link href="/dashboard-startup" className='font-helvetica text-xs flex'>
                            Lihat Riwayat
                            <Image src="/icons/navigate-next.png" alt="navigate-next" width="16" height="16" />
                        </Link>
                    </div>
                </div>
                <div className='bg-[#069154] h-1/2 flex flex-col justify-center'>
                    <div className='flex px-4'>
                        <div className='w-3/5'>
                            <h1 className='font-archivo text-2xl text-white shadow-black'>GRANT</h1>
                            <h1 className='font-archivo text-2xl text-white shadow-black mb-2'>POINTS</h1>
                            <div className='w-full text-white font-helvetica text-sm'>
                                Yuk berikan poin kepada visitor yang memainkan challenge!
                            </div>
                        </div>
                        <div className='w-2/5 flex justify-end items-center'>
                            <Image src="/img/startup-fox.png" alt="fox" width="90" height="98" />
                        </div>
                    </div>
                    <div className="p-4">
                        <button className="bg-white border border-[#1F307C] text-[#1F307C] 
                rounded-md w-full font-helvetica font-bold text-xs py-2 px-4">
                            Grant Points
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-white">
                <button className="bg-red text-white bg-[#F43518] rounded-md w-full font-helvetica font-bold 
                text-xs py-2 px-4">
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default DashboardStartupPage;
