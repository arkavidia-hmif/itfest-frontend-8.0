/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';

interface MerchItemProps {
  startup: string,
  items: {
    name: string,
    price: number,
    stock: number,
    quantity: number,
  }[];
}

const MerchItem: React.FC<MerchItemProps> = ({
  startup,
  items,
}) => {
  return (
    <div className='p-2 font-body-3'>
      <div className='flex flex-row gap-2'>
        <Image src='/img/dummy-startup-logo.png' alt='navigate-previous' width='24' height='24' />
        <span>{startup}</span>
      </div>
      {items.map((el, idx) =>
        <div key={idx} className='pt-2 flex flex-row items-center'>
          <Image className='rounded-md mr-2' src='/img/test-merch-image.png' alt='navigate-previous' width='80' height='80' />
          <div className='w-full leading-[1.1rem]'>
            <div className='flex flex-row justify-between'>
              <span>{el.name}</span>
              <span className='text-[#BFBFBF]'>x{el.quantity}</span>
            </div>
            <span className='text-[#BFBFBF]'>Sisa: {el.stock - el.quantity}</span>
            <div className='flex flex-row justify-between'>
              <span className='text-[#BFBFBF]'>Harga satuan:</span>
              <div className='flex flex-row'>
                <Image className='mr-1 opacity-30' src='/img/gems.svg' alt='navigate-previous' width='8' height='8' />
                <span className='text-[#BFBFBF]'>{el.price}</span>
              </div>
            </div>
            <div className='flex flex-row justify-between'>
              <span className='text-[#BFBFBF]'>Total:</span>
              <div className='flex flex-row'>
                <Image className='mr-1' src='/img/green-diamond.svg' alt='navigate-previous' width='12' height='12' />
                <span className='font-bold'>{el.price * el.quantity}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchItem;