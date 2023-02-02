/* eslint-disable max-len */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import InfoCard from '@/components/katalog/InfoCard';
import Searchbar from '@/components/katalog/Searchbar';
import CatalogueItem from '@/components/katalog/CatalogueItem';

interface RedeemPointsPageProps {}

const RedeemPointsPage: React.FC<RedeemPointsPageProps> = () => {
  const dummyCatalogueData = [
    {
      name: 'Kaos mentor',
      startup: 'Startup Startip',
      price: 100000,
      stock: 20,
      enableQuantityInput: true,
    },
    {
      name: 'Kaos mentor',
      startup: 'Startup Startip',
      price: 100000,
      stock: 20,
      enableQuantityInput: true,
    },
    {
      name: 'Kaos mentor',
      startup: 'Startup Startip',
      price: 100000,
      stock: 20,
      enableQuantityInput: true,
    },
  ];

  const [toggleCatalogue, setToggleCatalogue] = useState<boolean>(false);

  // State Poin Sementara
  const poinAcc = 30000;

  return (
    <div className="bg-white flex flex-row min-w-screen">
      <div
        className={`absolute z-0 transition duration-500 ${
          toggleCatalogue ? 'invisible' : 'visible'
        }`}
      >
        <div className="flex h-38 bg-[#069154] mb-6">
          <Image
            className="ml-6"
            src="img/ArrowBack.svg"
            alt="ArrowBack"
            width="8"
            height="8"
          />
          <div className="flex flex-col ml-8 mt-12 pt-1">
            <h6 className="leading-8 mt-2">
              Redeem<br></br>Points
            </h6>
          </div>
          <Image
            className="ml-20"
            src="img/Rectangle.svg"
            alt="Rectangle"
            width="50"
            height="50"
          />
          <Image
            className="-ml-4 mt-20"
            src="img/Rectangle.svg"
            alt="Rectangle"
            width="100"
            height="100"
          />
        </div>
        <div className="flex flex-col border rounded-xl px-6 mx-5 py-3">
          <span>Redeeming points to:</span>
          <span className="mt-1 mb-4 w-full text-center font-semibold bg-black text-white">
            yandysehat (135182)
          </span>
          <span>Pilihan merchandise:</span>
          {/* Show merchandises added */}
          <button
            type="button"
            onClick={() => setToggleCatalogue(!toggleCatalogue)}
            className="font-bold my-1 border-2 rounded-lg w-full text-center py-[4px] text-[#3b4a8c] border-[#3b4a8c] "
          >
            Tambah Merchandise
          </button>
        </div>
        <Image
          className="mx-auto mt-2"
          src="img/FoxWithPoints.svg"
          alt="FoxWithPoints"
          width="390"
          height="80"
        />
        <h6 className="text-center my-2">REDEEMING</h6>
        <div className="flex justify-center h-12">
          <Image
            className="mr-1 -mt-2"
            src="img/RectangleRounded.svg"
            alt="RectangleRounded"
            width="28"
            height="24"
          />
          <span className="text-3xl font-bold">0</span>
        </div>
        <div className="flex justify-between bg-[#ffd271] mx-5 rounded-2xl text-sm">
          <div className="flex flex-col my-2 ml-5">
            <span>Points before redemption</span>
            <div className="flex">
              <Image
                className="mr-1"
                src="img/RectangleRounded.svg"
                alt="RectangleRounded"
                width="16"
                height="24"
              />
              <span className="text-xl font-bold">300000</span>
            </div>
          </div>
          <div className="flex flex-col my-2 mr-5">
            <span>Points after redemption</span>
            <div className="flex">
              <Image
                className="mr-1"
                src="img/RectangleRounded.svg"
                alt="RectangleRounded"
                width="16"
                height="24"
              />
              <span className="text-xl font-bold">300000</span>
            </div>
          </div>
        </div>
        <div className="flex text-sm items-center h-16 bg-[#F9F9F9] mt-36 mx-6 px-3 border-[#3FB160] border rounded-xl">
          <Image
            src="img/Checklist.svg"
            alt="Checklist"
            width="32"
            height="32"
          />
          <span className="ml-3 mr-4">
            User ditemukan. Silakan lakukan transaksi poin!
          </span>
          <a href="">
            <Image
              className="m-1"
              src="img/Close.svg"
              alt="Close"
              width="16"
              height="16"
            />
          </a>
        </div>
        <div className="border border-[#F9F9F9] mt-4">
          <a
            href=""
            className="bg-[#BFBFBF] h-14 m-4 text-white flex items-center justify-center rounded-xl font-semibold"
          >
            <span className="opacity-80">Redeem</span>
          </a>
        </div>
      </div>

      {/* Katalog Merch Page */}
      <div
        className={`absolute z-10 min-h-screen flex flex-col bg-white transition ease-in-out duration-500 ${
          toggleCatalogue
            ? 'translate-x-0 visible'
            : '-translate-x-[320rem] invisible'
        }`}
      >
        {/* Header */}
        <div className="pt-[44px] pb-7 flex flex-row bg-[#1F307C] px-4 relative">
          <div className="flex flex-row gap-3 items-center z-10">
            <Image
              src="/icons/left-arrow.svg"
              width={24}
              height={24}
              alt="Left Arrow"
              onClick={() => setToggleCatalogue(!toggleCatalogue)}
            />
            <h6>MERCHANDISE</h6>
          </div>
          <Image
            src="/icons/merch-mask.svg"
            width={200}
            height={200}
            alt="Left Arrow"
            className="absolute inset-y-3 inset-x-44 z-0"
          />
        </div>

        {/* Catalogue */}
        <div className="px-4 pt-4">
          <InfoCard>
            Lihat perhitungan poin untuk penukaran merchandise pilihanmu!
          </InfoCard>
          <div className="flex items-center gap-5 mt-2">
            <Searchbar placeholder="Masukkan merchandise" />
          </div>

          {dummyCatalogueData.map((data, idx) => (
            <CatalogueItem
              key={idx}
              name={data.name}
              price={data.price}
              startup={data.startup}
              stock={data.stock}
              enableQuantityInput={data.enableQuantityInput}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="fixed bg-white shadow-sm bottom-0 p-4 flex flex-col w-full">
          {/* Jumlah Poin */}
          <div className="flex flex-row justify-between items-center">
            <p className="flex font-helvetica text-body-3">Jumlah Poinmu</p>
            <div className="flex flex-row">
              <Image
                className="mr-1"
                src="/icons/point-highlight.svg"
                alt="Points"
                height={12}
                width={12}
              />
              <p
                className={`font-bold text-body-3 ${
                  poinAcc > 20000 ? 'text-arkav-green' : 'text-arkav-red'
                }`}
              >
                20000
              </p>
            </div>
          </div>

          {/* Label poin */}
          <div
            className={`flex justify-center border-2 ${
              poinAcc > 20000 ? 'border-arkav-green' : 'border-arkav-red'
            } 
            bg-arkav-green-light rounded-xl my-4`}
          >
            <p
              className={`font-bold ${
                poinAcc > 20000 ? 'text-arkav-green' : 'text-arkav-red'
              }`}
            >
              {poinAcc > 20000
                ? 'Poin cukup untuk ditukarkan'
                : 'Poin tidak mencukupi!'}
            </p>
          </div>

          {/* Challenge */}
          <p className="text-body-3 text-arkav-grey-400">
            Silahkan lakukan challenge di booth Startup untuk <br />
            mendapatkan poin!
          </p>

          {/* Items */}
          <div className="flex flex-row justify-between items-center py-3">
            <p className="flex font-bold font-helvetica text-body-1">4 Item</p>
            <div className="flex flex-row">
              <Image
                className="mr-1"
                src="/icons/point-highlight.svg"
                alt="Points"
                height={24}
                width={16}
              />
              <p
                className={`font-bold text-body-1 ${
                  poinAcc > 20000 ? 'text-arkav-green' : 'text-arkav-red'
                }`}
              >
                {poinAcc}
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            className={`py-3 w-full flex items-center justify-center rounded-md ${
              poinAcc > 20000 ? 'bg-arkav-blue' : 'bg-arkav-grey-300'
            }`}
          >
            <p className="text-body-3 text-white">Tambahkan</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedeemPointsPage;
