/* eslint-disable max-len */
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InfoCard from '@/components/Catalogue/InfoCard';
import Searchbar from '@/components/Catalogue/Searchbar';
import CatalogueItem from '@/components/Catalogue/CatalogueItem';
import Merchandise from '@/components/Redeem/MerchItem';
import EnterPinField from '@/components/EnterPin';
import Modal from '@/components/Modal';
import { getAllMerch } from '@/services/merchandise';
import { getCurrentUser } from '@/services/user';

interface RedeemPointsPageProps { }

interface CatalogueData {
  name: string;
  startup: string | 'Startup Startip';
  price: number;
  stock: number;
  enableQuantityInput: boolean;
}

interface UserProfile {
  name: string;
  userCode: number;
  point: number;
}

interface Toggle {
  catalogue: boolean;
  warningModal: boolean;
  succeedModal: boolean;
  failedModal: boolean;
}

interface RedeemData {
  id: number;
  name: string;
  startup: string | 'Startup Startip';
  price: number;
  quantity: number;
  stock: number;
}

const RedeemPointsPage: React.FC<RedeemPointsPageProps> = () => {
  const [catalogueData, setCatalogueData] = useState<CatalogueData[]>([]);
  const [filteredCatalogueData, setFilteredCatalogueData] = useState<any[]>([]);
  const [redeemData, setRedeemData] = useState<RedeemData[]>([]);
  const [totalRedeemPoint, setTotalRedeemPoint] = useState<number>(0);
  const [toggle, setToggle] = useState<Toggle>({
    catalogue: false,
    warningModal: false,
    succeedModal: false,
    failedModal: false,
  });
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'yandysehat',
    userCode: 135182,
    point: 0,
  });
  const [pin, setPin] = useState('');

  // useEffect only render once on mount
  useEffect(() => {
    // fetch user profile
    const fetchUser = async () => {
      try {
        const res = await getCurrentUser();
        const responseData = res.data;

        setUserProfile(prevState => ({
          ...prevState,
          name: responseData.name,
          userCode: responseData.usercode,
          point: responseData.point,
        }));
      }
      catch (e) {
        console.error(e);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    // fetch catalogue
    const fetchCatalogue = async () => {
      try {
        const res = await getAllMerch();
        const responseData = res.data;
        const mappedData = responseData.map((data: any) => {
          return {
            status: 'sent',
            name: data.name,
            startup: data.startup || 'Startup Startip',
            price: data.point,
            stock: data.stock,
            enableQuantityInput: true,
          };
        });

        setCatalogueData(mappedData);
      }
      catch (e) {
        console.error(e);
      }
    };
    fetchCatalogue();

    // Ubah struktur catalogueData jadi filteredCatalogueData (perstartup)
    let startups: string[] = [];
    catalogueData.forEach(element => {
      if (startups.indexOf(element.startup) === -1) {
        startups.push(element.startup);
      }
    });
    startups.forEach(startup => {
      let items: any[] = [];
      catalogueData.forEach(element => {
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
        setFilteredCatalogueData([
          {
            startup: startup,
            items: items,
          }
        ]);
      });
    });
  }, [catalogueData]);

  return (
    <div>
      <div>
        {/* <EnterPinField onClick={setPin} /> */}
      </div>
      <div className={`${!toggle.warningModal && !toggle.succeedModal && !toggle.failedModal && 'hidden'} bg-arkav-grey-700/50 z-30 h-screen w-full flex items-center fixed top-0 left-0`}>
        <div className={`${!toggle.warningModal && 'hidden'} z-40 mx-auto flex justify-center`}>
          <Modal
            name={userProfile.name}
            id={userProfile.userCode}
            point={300}
            status='warning'
            icon='yellow-warning'
            scope='redeem-points'
            onClickLanjutkan={() => {
              setToggle({
                catalogue: toggle.catalogue,
                warningModal: false,
                succeedModal: true,
                failedModal: toggle.failedModal,
              });
            }}
            onClickTutup={() => setToggle(prevState => ({
              ...prevState,
              warningModal: false,
            }))}
            onClickKembali={() => setToggle(prevState => ({
              ...prevState,
              warningModal: false,
            }))}
          />
        </div>
        <div className={`${!toggle.succeedModal && 'hidden'} z-40 mx-auto flex justify-center`}>
          <Modal
            name={userProfile.name}
            id={userProfile.userCode}
            point={300}
            status='success'
            icon='green-bag'
            scope='add-merchant'
            onClickLanjutkan={() => setToggle(prevState => ({
              ...prevState,
              succeedModal: false,
            }))}
            onClickTutup={() => setToggle(prevState => ({
              ...prevState,
              succeedModal: false,
            }))}
          />
        </div>
        <div className={`${!toggle.failedModal && 'hidden'} z-40 mx-auto flex justify-center`}>
          <Modal
            name={userProfile.name}
            id={userProfile.userCode}
            point={300}
            status='fail'
            icon='sad-face'
            scope='redeem-points'
            onClickTutup={() => setToggle(prevState => ({
              ...prevState,
              failedModal: false,
            }))}
            onClickKembali={() => setToggle(prevState => ({
              ...prevState,
              failedModal: false,
            }))}
          />
        </div>
      </div>
      <div>
        <div className='h-[calc(100vh)] flex flex-col justify-between'>
          <div className={`${toggle.catalogue ? 'hidden' : 'block'
            } flex flex-col justify-between h-full`}>
            <div>
              <div className='flex pt-11 pb-4 px-4 bg-[#069154]'>
                <Link href='/a/dashboard' className='mr-2'>
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
                  className='ml-16 -mt-16'
                  src='/img/Rectangle.svg'
                  alt='Rectangle'
                  width='46'
                  height='46'
                />
                <Image
                  className='-ml-5 -mb-4'
                  src='/img/Rectangle.svg'
                  alt='Rectangle'
                  width='100'
                  height='100'
                />
              </div>
              <div className='flex flex-col border rounded-xl px-4 mx-4 py-3 my-4'>
                <span>Redeeming points to:</span>
                <span className='mt-1 mb-4 w-full text-center font-semibold bg-black text-white'>
                  {userProfile.name} ({userProfile.userCode})
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
                  type='button'
                  onClick={() => {
                    setToggle(prevState => ({
                      ...prevState,
                      catalogue: !toggle.catalogue,
                    }));
                  }}
                  className='font-bold my-1 border-2 rounded-lg w-full text-center py-[4px] text-[#3b4a8c] border-[#3b4a8c] '
                >
                  Tambah Merchandise
                </button>
              </div>
              <Image
                className='mx-auto mt-2'
                src='/img/FoxWithPoints.svg'
                alt='FoxWithPoints'
                width='390'
                height='80'
              />
              <h6 className='text-center my-2'>REDEEMING</h6>
              <div className='flex justify-center h-12'>
                <Image
                  className='mr-1 -mt-2'
                  src='/img/RectangleRounded.svg'
                  alt='RectangleRounded'
                  width='28'
                  height='24'
                />
                <span className='text-3xl font-bold'>{totalRedeemPoint}</span>
              </div>
              <div className='flex justify-between bg-[#ffd271] mx-5 rounded-2xl text-sm'>
                <div className='flex flex-col my-2 ml-5'>
                  <span>Points before redemption</span>
                  <div className='flex'>
                    <Image
                      className='mr-1'
                      src='/img/RectangleRounded.svg'
                      alt='RectangleRounded'
                      width='16'
                      height='24'
                    />
                    <span className='text-xl font-bold'>{userProfile.point}</span>
                  </div>
                </div>
                <div className='flex flex-col my-2 mr-5'>
                  <span>Points after redemption</span>
                  <div className='flex'>
                    <Image
                      className='mr-1'
                      src='/img/RectangleRounded.svg'
                      alt='RectangleRounded'
                      width='16'
                      height='24'
                    />
                    <span className='text-xl font-bold'>{userProfile.point - totalRedeemPoint}</span>
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
                <button
                  className='bg-[#1F307C] text-white rounded-md w-full font-helvetica font-bold text-xs py-3 px-4'
                  onClick={() => setToggle(prevState => ({
                    ...prevState,
                    warningModal: true,
                  }))}
                >
                  Redeem
                </button>
              </div>
            </div>
          </div>

          {/* Katalog Merch Page */}
          <div
            className={`${toggle.catalogue ? 'block' : 'hidden'
              } w-full min-h-screen max-h-screen flex flex-col bg-white`}
          >
            {/* Header */}
            <div className='pt-[44px] pb-7 flex flex-row bg-[#1F307C] px-4 relative'>
              <div className='flex flex-row gap-3 items-center z-10'>
                <Image
                  className='cursor-pointer'
                  src='/icons/left-arrow.svg'
                  width={24}
                  height={24}
                  alt='Left Arrow'
                  onClick={() => setToggle(prevState => ({
                    ...prevState,
                    catalogue: !toggle.catalogue,
                  }))}
                />
                <h6>MERCHANDISE</h6>
              </div>
              <Image
                src='/icons/merch-mask.svg'
                width={200}
                height={200}
                alt='Left Arrow'
                className='absolute inset-y-3 inset-x-44 z-0'
              />
            </div>

            {/* Catalogue */}
            <div className='px-4 pt-4'>
              <InfoCard>
                Lihat perhitungan poin untuk penukaran merchandise pilihanmu!
              </InfoCard>
              <div className='flex items-center gap-5 mt-2'>
                <Searchbar placeholder='Masukkan merchandise' />
              </div>
            </div>
            <div className='px-4 flex-grow overflow-y-auto'>
              {catalogueData.map((data, idx) => (
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
            <div className='bg-white shadow-sm bottom-0 p-4 flex flex-col w-full mt-auto'>
              {/* Jumlah Poin */}
              <div className='flex flex-row justify-between items-center'>
                <p className='flex font-helvetica text-body-3'>Jumlah Poinmu</p>
                <div className='flex flex-row'>
                  <Image
                    className='mr-1'
                    src='/icons/point-highlight.svg'
                    alt='Points'
                    height={12}
                    width={12}
                  />
                  <p
                    className={`font-bold text-body-3 ${userProfile.point > 20000 ? 'text-arkav-green' : 'text-arkav-red'
                      }`}
                  >
                    {userProfile.point}
                  </p>
                </div>
              </div>

              {/* Label poin */}
              <div
                className={`flex justify-center border-2 ${userProfile.point > 20000 ? 'border-arkav-green' : 'border-arkav-red'
                  } 
            bg-arkav-green-light rounded-xl my-4`}
              >
                <p
                  className={`font-bold ${userProfile.point > 20000 ? 'text-arkav-green' : 'text-arkav-red'
                    }`}
                >
                  {userProfile.point > 20000
                    ? 'Poin cukup untuk ditukarkan'
                    : 'Poin tidak mencukupi!'}
                </p>
              </div>

              {/* Challenge */}
              <p className='text-body-3 text-arkav-grey-400'>
                Silahkan lakukan challenge di booth Startup untuk <br />
                mendapatkan poin!
              </p>

              {/* Items */}
              <div className='flex flex-row justify-between items-center py-3'>
                <p className='flex font-bold font-helvetica text-body-1'>4 Item</p>
                <div className='flex flex-row'>
                  <Image
                    className='mr-1'
                    src='/icons/point-highlight.svg'
                    alt='Points'
                    height={24}
                    width={16}
                  />
                  <p
                    className={`font-bold text-body-1 ${userProfile.point > 20000 ? 'text-arkav-green' : 'text-arkav-red'
                      }`}
                  >
                    {userProfile.point}
                  </p>
                </div>
              </div>

              {/* Button */}
              <button
                className={`text-white rounded-md w-full font-helvetica font-bold text-xs py-3 px-4 ${userProfile.point > 20000 ? 'bg-arkav-blue' : 'bg-arkav-grey-300'
                  }`}
                onClick={() => setToggle(prevState => ({
                  ...prevState,
                  catalogue: !toggle.catalogue,
                }))}
              >
                Tambahkan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
};

export default RedeemPointsPage;
