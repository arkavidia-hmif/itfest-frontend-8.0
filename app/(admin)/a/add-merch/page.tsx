/* eslint-disable max-len */
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from '@/components/Profile/Dropdown';
import Modal from '@/components/Modal';
import { addMerch } from '@/services/merchandise';

interface AddMerchPageProps { }

const AddMerchPage: React.FC<AddMerchPageProps> = () => {
  const [itemName, setItemName] = useState<string>('');
  const [startup, setStartup] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [showSucceedModal, setShowSucceedModal] = useState<boolean>(false);
  const [showFailedModal, setShowFailedModal] = useState<boolean>(false);

  const submitHandler = () => {
    const fetchAddMerch = async () => {
      try {
        await addMerch(itemName, stock, price);
        setShowSucceedModal(true);
      }
      catch (e) {
        console.error(e);
        setShowFailedModal(true);
      }
    };

    fetchAddMerch();
  };

  return (
    <div className='h-[calc(100vh)] flex flex-col justify-between'>
      <div className={`${!showSucceedModal && !showFailedModal && 'hidden'} bg-arkav-grey-700/50 z-30 h-screen w-full flex items-center fixed top-0 left-0`}>
        <div className={`${!showSucceedModal && 'hidden'} z-40 mx-auto flex justify-center`}>
          <Modal
            status='success'
            icon='green-bag'
            item='tes'
            scope='add-merchant'
            onClickLanjutkan={() => setShowSucceedModal(false)}
            onClickTutup={() => setShowSucceedModal(false)}
          />
        </div>
        <div className={`${!showFailedModal && 'hidden'} z-40 mx-auto flex justify-center`}>
          <Modal
            status='fail'
            icon='sad-face'
            scope='add-merchant'
            onClickKembali={() => setShowFailedModal(false)}
            onClickTutup={() => setShowFailedModal(false)}
          />
        </div>
      </div>
      <div className='flex flex-col justify-between h-full bg-white'>
        <div>
          <div className='flex pt-11 ml-5'>
            <Link href='/a/merch' className='mt-1'>
              <Image
                src='/img/ArrowBackBlue.svg'
                alt='navigate-previous'
                width='8'
                height='8'
              />
            </Link>
            <div className='mx-6'>
              <h6>TAMBAH</h6>
              <h6>MERCHANDISE</h6>
            </div>
          </div>
          <div className='px-4 pt-3 pb-2'>
            <div className='text-body-3 py-2 text-[#535252]'>Silakan isi untuk menambahkan merchandise!</div>
            <div className='flex flex-col w-full font-helvetica bg-[#F9F9F9] rounded-lg py-2 px-3'>
              <label className='font-bold text-xs mb-1'>
                Nama Item
              </label>
              <input
                className='border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:shadow-outline'
                id='itemname'
                type='text'
                placeholder='Masukkan nama item'
                onChange={(e) => setItemName(e.target.value)}
              />
              <label className='font-bold text-xs mb-1'>
                Startup
              </label>
              <Dropdown
                placeholder='Pilih startup'
                data={['StartupStartip']}
                selected={startup}
                dataChoosen={(e: string) => setStartup(e)}
              />
              <label className='font-bold text-xs mb-1'>
                Harga
              </label>
              <input
                className='border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:shadow-outline'
                id='itemprice'
                type='text'
                placeholder='Masukkan harga item'
                onChange={(e) => setPrice(parseInt(e.target.value))}
              />
              <label className='font-bold text-xs mb-1'>
                Sisa
              </label>
              <input
                className='border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:shadow-outline'
                id='itemstock'
                type='text'
                placeholder='Masukkan sisa item'
                onChange={(e) => setStock(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className='p-4'>
          <button
            type='submit'
            disabled={(itemName && startup && price && stock) ? false : true}
            className='w-full rounded-md bg-[#1F307C] pt-2 pb-1.5 font-helvetica font-bold text-xs text-center 
                  text-white h-10 tracking-wide disabled:bg-[#BFBFBF]'
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div >
  );
};

export default AddMerchPage;
