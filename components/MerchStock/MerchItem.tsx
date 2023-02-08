import React from 'react';
import Image from 'next/image';

interface MerchItemProps {
  no: number,
  name: string;
  startup: string;
  price: number;
  stock: number;
}

const MerchItem: React.FC<MerchItemProps> = ({
  no,
  name,
  startup,
  price = 0,
  stock = 0,
}) => {
  return (
    <tr className={no % 2 == 0 ? 'bg-[#F9F9F9]' : 'bg-white'}>
      <td scope='col' className='w-[24px] pl-3 pt-1'>{no}</td>
      <td scope='col' className='w-[100px] pl-2 pt-1'>{name}</td>
      <td scope='col' className='w-[72px] pl-4 pt-1'>{startup}</td>
      <td scope='col' className='w-[60px] flex gap-1 pt-1 pl-3'>
        <Image src='/img/gems.svg' alt='Gems' width='8' height='8' />
        {price}
      </td>
      <td scope='col' className='w-[40px] pt-1'>{stock}</td>
      <td className='w-[32px] pt-2 pb-3 pr-1'>
        <Image className='cursor-pointer' src='/img/delete.svg' alt='Delete' width='32' height='32' />
      </td>
    </tr>
  );
};

export default MerchItem;
