/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';

interface RedeemPointsPageProps { }

const RedeemPointsPage: React.FC<RedeemPointsPageProps> = () => {
    return (
        <div className="bg-white -m-2">
            <div className="flex h-38 bg-[#069154] mb-6">
                <Image className="ml-6" src="img/ArrowBack.svg" alt="ArrowBack" width="8" height="8" />
                <div className="flex flex-col ml-8 mt-12 pt-1">
                    <h6 className="leading-8 mt-2">Redeem<br></br>Points</h6>
                </div>
                <Image className="ml-20" src="img/Rectangle.svg" alt="Rectangle" width="50" height="50" />
                <Image className="-ml-4 mt-20" src="img/Rectangle.svg" alt="Rectangle" width="100" height="100" />
            </div>
            <div className="flex flex-col border rounded-xl px-6 mx-5 py-3">
                <span>Redeeming points to:</span>
                <span className="mt-1 mb-4 w-full text-center font-semibold bg-black text-white">yandysehat (135182)</span>
                <span>Pilihan merchandise:</span>
                {/* Show merchandises added */}
                <a href="" className="font-bold my-1 border-2 rounded-lg w-full text-center py-[4px] text-[#3b4a8c] border-[#3b4a8c] ">Tambah Merchandise</a>
            </div>
            <Image className="mx-auto mt-2" src="img/FoxWithPoints.svg" alt="FoxWithPoints" width="390" height="80" />
            <h6 className="text-3xl text-center my-2">REDEEMING</h6>
            <div className="flex justify-center h-12">
                <Image className="mr-1 -mt-2" src="img/RectangleRounded.svg" alt="RectangleRounded" width="28" height="24" />
                <span className="text-3xl font-bold">0</span>
            </div>
            <div className="flex justify-between bg-[#ffd271] mx-5 rounded-2xl text-sm">
                <div className="flex flex-col my-2 ml-5">
                    <span>Points before redemption</span>
                    <div className="flex">
                        <Image className="mr-1" src="img/RectangleRounded.svg" alt="RectangleRounded" width="16" height="24" />
                        <span className="text-xl font-bold">300000</span>
                    </div>
                </div>
                <div className="flex flex-col my-2 mr-5">
                    <span>Points after redemption</span>
                    <div className="flex">
                        <Image className="mr-1" src="img/RectangleRounded.svg" alt="RectangleRounded" width="16" height="24" />
                        <span className="text-xl font-bold">300000</span>
                    </div>
                </div>
            </div>
            <div className="flex text-sm items-center h-16 bg-[#F9F9F9] mt-36 mx-6 px-3 border-[#3FB160] border rounded-xl">
                <Image src="img/Checklist.svg" alt="Checklist" width="32" height="32" />
                <span className="ml-3 mr-4">User ditemukan. Silakan lakukan transaksi poin!</span>
                <a href="">
                    <Image className="m-1" src="img/Close.svg" alt="Close" width="16" height="16" />
                </a>
            </div>
            <div className="border border-[#F9F9F9] mt-4">
                <a href="" className="bg-[#BFBFBF] h-14 m-4 text-white flex items-center justify-center rounded-xl font-semibold">
                    <span className="opacity-80">Redeem</span>
                </a>
            </div>
        </div>
    );
};

export default RedeemPointsPage;
