/* eslint-disable max-len */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InfoCard from '@/components/Catalogue/InfoCard';
import Searchbar from '@/components/Catalogue/Searchbar';
import CatalogueItem from '@/components/Catalogue/CatalogueItem';
import Merchandise from '@/components/Redeem/MerchItem';
import EnterPinField from '@/components/EnterPin';

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
  const addMerchHandler = () => {
    setToggleCatalogue(!toggleCatalogue);
  };

  // State Poin Sementara
  const poinAcc = 30000;

  const [pin, setPin] = useState('');

  // Ubah Struktur Catalogue Data
  let startups: string[] = [];
  dummyCatalogueData.forEach(element => {
    if (startups.indexOf(element.startup) === -1) {
      startups.push(element.startup);
    }
  });
  const filteredCatalogueData: any[] = [];
  startups.forEach(startup => {
    let items: any[] = [];
    dummyCatalogueData.forEach(element => {
      let isDuplicate = false;
      items.forEach(el => {
        if (el.name == element.name && el.price == element.price && el.stock == element.stock && startup == element.startup) {
          isDuplicate = true;
        }
      });
      if (isDuplicate) {
        items[items.findIndex(i => i.name == element.name && i.price == element.price && i.stock == element.stock && startup == element.startup)].count += 1;
      } else {
        if (startup == element.startup) {
          items.push({
            name: element.name,
            price: element.price,
            stock: element.stock,
            count: 1,
          });
        }
      }
    });
    filteredCatalogueData.push(
      {
        startup: startup,
        items: items,
      }
    );
  });

  return (
    <div>
      <div>
        <EnterPinField onClick={setPin}/>
      </div>
      <div>
        <div className="h-[calc(100vh)] flex flex-col justify-between">
          <div className={`${
            toggleCatalogue ? 'hidden' : 'block'
          } flex flex-col justify-between h-full`}>
            <div>
              <div className="flex pt-11 pb-4 px-4 bg-[#069154]">
                <Link href='/addmerch' className='mr-2'>
                  <Image
                    src='/icons/navigate-previous.png'
                    alt='navigate-previous'
                    width='24'
                    height='24'
                  />
                </Link>
                <div>
                  <h6>REDEEM</h6>
                  <h6>POINTS</h6>
                </div>
                <Image
                  className="ml-16 -mt-16"
                  src="/img/Rectangle.svg"
                  alt="Rectangle"
                  width="46"
                  height="46"
                />
                <Image
                  className="-ml-5 -mb-4"
                  src="/img/Rectangle.svg"
                  alt="Rectangle"
                  width="100"
                  height="100"
                />
              </div>
              <div className='flex flex-col border rounded-xl px-4 mx-4 py-3 my-4'>
                <span>Redeeming points to:</span>
                <span className='mt-1 mb-4 w-full text-center font-semibold bg-black text-white'>
              yandysehat (135182)
            </span>
                <span>Pilihan merchandise:</span>
                <div className='bg-[#F9F9F9] rounded-md mb-1'>
                  {filteredCatalogueData.map((el, idx) =>
                    <Merchandise
                      key={idx}
                      startup={el.startup}
                      items={el.items} />
                  )}
                </div>
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
                src="/img/FoxWithPoints.svg"
                alt="FoxWithPoints"
                width="390"
                height="80"
              />
              <h6 className="text-center my-2">REDEEMING</h6>
              <div className="flex justify-center h-12">
                <Image
                  className="mr-1 -mt-2"
                  src="/img/RectangleRounded.svg"
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
                      src="/img/RectangleRounded.svg"
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
                      src="/img/RectangleRounded.svg"
                      alt="RectangleRounded"
                      width="16"
                      height="24"
                    />
                    <span className="text-xl font-bold">300000</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='flex text-sm items-center py-2 bg-[#F9F9F9] mx-6 px-3 border-[#3FB160] border rounded-xl'>
                <Image
                  src='/img/Checklist.svg'
                  alt='Checklist'
                  width='32'
                  height='32' />
                <span className='ml-3 mr-4'>User ditemukan. Silakan lakukan transaksi poin!</span>
                <a href=''>
                  <Image
                    className='m-1'
                    src='/img/Close.svg'
                    alt='Close'
                    width='16'
                    height='16' />
                </a>
              </div>
              <div className='p-4'>
                <Link
                  href=''>
                  <button
                    className='bg-[#1F307C] text-white rounded-md w-full font-helvetica font-bold text-xs py-3 px-4'>
                    Redeem
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Katalog Merch Page */}
          <div
            className={`${
              toggleCatalogue ? 'block' : 'hidden'
            } w-full min-h-screen max-h-screen flex flex-col bg-white`}
          >
            {/* Header */}
            <div className="pt-[44px] pb-7 flex flex-row bg-[#1F307C] px-4 relative">
              <div className="flex flex-row gap-3 items-center z-10">
                <Image
                  className='cursor-pointer'
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
            </div>
            <div className="px-4 flex-grow overflow-y-auto">
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
            <div className="bg-white shadow-sm bottom-0 p-4 flex flex-col w-full mt-auto">
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
                className={`text-white rounded-md w-full font-helvetica font-bold text-xs py-3 px-4 ${
                  poinAcc > 20000 ? 'bg-arkav-blue' : 'bg-arkav-grey-300'
                }`}
                onClick={addMerchHandler}
              >
                Tambahkan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RedeemPointsPage;
