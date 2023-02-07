/* eslint-disable max-len */
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from '@/components/Profile/Dropdown';

interface AddMerchPageProps { }

const AddMerchPage: React.FC<AddMerchPageProps> = () => {
  let state = {
    itemname: '',
    startup: '',
    itemprice: 0,
    itemstock: 0,
  };
  return (
    <div className='h-[calc(100vh)] flex flex-col justify-between'>
      <form className='flex flex-col justify-between h-full bg-white'>
        <div>
          <div className='flex pt-11 ml-5'>
            <Link href="/a/merch" className="mt-1">
              <Image
                src="/img/ArrowBackBlue.svg"
                alt="navigate-previous"
                width="8"
                height="8"
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
              />
              <label className='font-bold text-xs mb-1'>
                Startup
              </label>
              <Dropdown
                placeholder='Pilih startup'
                data={['StartupStartip']}
              />
              <label className='font-bold text-xs mb-1'>
                Harga
              </label>
              <input
                className='border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:shadow-outline'
                id='itemprice'
                type='text'
                placeholder='Masukkan harga item'
              />
              <label className='font-bold text-xs mb-1'>
                Sisa
              </label>
              <input
                className='border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:shadow-outline'
                id='itemstock'
                type='text'
                placeholder='Masukkan sisa item'
              />
            </div>
          </div>
          {/* <button
            type='submit'
            className={`${state.itemname && state.startup && state.itemprice && state.itemstock ? 'bg-[#1F307C]' : 'bg-[#BFBFBF]'} text-white rounded-md w-full font-helvetica font-bold text-xs py-2 px-4`}
          >
            Submit
          </button> */}
        </div>
        <button
          type="submit"
          className={`${state.itemname && state.startup && state.itemprice && state.itemstock ? 'bg-[#1F307C]' : 'bg-[#BFBFBF]'}w-full rounded-md bg-[#1F307C] pt-2 pb-1.5 font-helvetica font-bold text-xs text-center 
                  text-white h-10 tracking-wide disabled:bg-arkav-grey-500 disabled:cursor-default m-4`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMerchPage;
