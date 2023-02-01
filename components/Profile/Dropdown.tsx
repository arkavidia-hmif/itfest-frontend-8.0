/* eslint-disable max-len */
import { useState } from "react";
import Image from "next/image";

import ArrowDown from '@/public/img/arrow-down.svg';

type DropdownData = string;

interface DropdownProps {
  data: DropdownData[],
  placeholder: string,
}

export default function Dropdown({
  data,
  placeholder
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  return (
    <div className='relative w-full font-helvetica'>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={`bg-white relative border rounded-md w-full p-2 mb-1 text-xs cursor-pointer ${selectedData ? '' : 'text-gray-300'} ${open ? 'border-gray-400' : ''}`}>
        {selectedData ? selectedData : placeholder}
        <Image
          src={ArrowDown}
          height={16} alt={''}
          className={`absolute right-0 bottom-2 mr-2 cursor-pointer ${open ? 'transition-transform rotate-180' : 'transition-transform rotate-0'}`}
        />
      </div>
      {open ? (
        <ul
          className={`absolute z-10 w-full overflow-y-auto rounded-md outline-0 border py-1 bg-white ${open ? 'max-h-48 outline' : 'max-h-0'
            }`}>
          {data?.map((d) => (
            <li
              key={`${d}`}
              className={`cursor-pointer p-2 w-full text-xs hover:bg-gray-100 bg-white
            ${d === selectedData && 'bg-gray-100 font-bold'}`}
              onClick={() => {
                if (d !== selectedData) {
                  setSelectedData(d);
                  setOpen(false);
                }
              }}>
              <span className="inline-block align-middle">{d}</span>
            </li>
          ))}
        </ul>
      ) : (null)}
    </div>
  );
}