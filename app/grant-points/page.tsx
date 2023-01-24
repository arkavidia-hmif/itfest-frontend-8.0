import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GrantPointsPageProps { }

const GrantPointsPage: React.FC<GrantPointsPageProps> = () => {
    return (
        <div className='h-[calc(100vh)] flex flex-col justify-between'>
            <div className="flex flex-col justify-between h-full bg-white">
                <div>
                    <div className='flex pt-11 pb-9 px-4 bg-[#069154]'>
                        <Link href="/grant-points" className='mr-2'>
                            <Image src="/icons/navigate-previous.png" alt="navigate-previous" width="24" height="24" />
                        </Link>
                        <div>
                            <h6>GRANT</h6>
                            <h6>POINTS</h6>
                        </div>
                    </div>

                    <div className='m-4 px-4 py-2 border border-gray-300 rounded-md'>
                        <p className='mb-2 font-helvetica text-xs'>Mengirim poin ke:</p>
                        <div className='bg-black w-full text-white font-helvetica text-xs font-bold p-1 text-center'>
                            yandysehat(135182)
                        </div>
                        <p className='my-2 font-helvetica text-xs'>Pilih kesulitan challenge</p>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                            <input type="checkbox" id="easy" className='mr-1' />
                            <label htmlFor="easy">Easy</label>
                        </div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                            <input type="checkbox" id="medium" className='mr-1' />
                            <label htmlFor="easy">Medium</label>
                        </div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                            <input type="checkbox" id="hard" className='mr-1' />
                            <label htmlFor="easy">Hard</label>
                        </div>
                    </div>
                    <div className='m-4 flex flex-col items-center'>
                        <Image src="/img/grant-points-fox.png" alt="fox" width="600" height="300" className='mb-2' />
                        <h6>GRANT</h6>
                        <div className='flex items-center'>
                            <Image src="/img/level.png" alt="level" width="22" height="32" />
                            <p className='font-archivo text-2xl font-bold'>0</p>
                        </div>
                    </div>

                </div>
                <div className="p-4">
                    <button className="bg-[#1F307C] text-white
                    rounded-md w-full font-helvetica font-bold text-xs py-2 px-4">
                        Grant
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GrantPointsPage;
