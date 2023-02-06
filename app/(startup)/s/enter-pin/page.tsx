'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LeftArrow from '@/public/icons/left-arrow-icon.svg';
import { findUser } from '@/services/user';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

interface EnterPinStartupProps { }

const EnterPinStartup: React.FC<EnterPinStartupProps> = () => {
  const [values, setValues] = useState(['', '', '', '', '', '']);
  const [valuesJoin, setValuesJoin] = useState('');

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await findUser(valuesJoin);
        const responseData = res.data;

        if (responseData.usercode !== valuesJoin) {
          toast.error('User dengan pin<' + valuesJoin + '> tidak ditemukan. Harap coba lagi.');
        } else {
          router.push('/s/grant-points');
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchUser();
  }, [valuesJoin, router]);

  const onSubmit = () => {
    setValuesJoin(values.join(''));
  };

  const handleChange = (e: any) => {
    const { maxLength, value, name } = e.target;
    const [, fieldIndex] = name.split('-');

    if (value.length >= maxLength) {
      if (parseInt(fieldIndex, 10) < 6) {
        const nextSibling = document.querySelector(
          `input[name=field-${parseInt(fieldIndex, 10) + 1}]`
        );
        if (nextSibling !== null) {
          (nextSibling as HTMLElement).focus();
        }
      }
    }

    const newValues = [...values];
    newValues[fieldIndex] = value;
    setValues(newValues);
  };

  return (
    <>
      <div className="bg-white h-[calc(100vh)] flex flex-col">
        <div className="flex">
          <div className="mt-5 ml-4">
            <Image src={LeftArrow} alt="Left Arrow" />
          </div>
          <div className="ml-3 mt-5">
            <h6>ENTER PIN</h6>
          </div>{' '}
        </div>
        <div className="self-center">
          <div className="flex flex-col">
            <div className="font-helvetica text-[12px] text-[#535252] font-[400] mt-4 ml-1 mb-1">
              Masukkan pin visitor
            </div>
            <div>
              {/*<form className="relative">*/}
              <div className="pin-input">
                {values.map((_, index) => (
                  <input
                    maxLength={1}
                    key={index}
                    type="number"
                    className="p-3 border border-gray-300 rounded-md w-[48px] h-[80px] mx-[4px] 
                      placeholder-slate-400 text-[36px] font-[900] font-archivo"
                    name={`field-${index}`}
                    onChange={handleChange}
                  />
                ))}
              </div>

              <button
                className="fixed bottom-[16px] font-helvetica font-bold text-[12px] rounded-xl bg-[#1F307C] 
                text-[#FFFFFF] w-[328px] h-[40px]"
                onClick={onSubmit}
              >
                Submit
              </button>
              {/*</form>*/}
            </div>
          </div>
        </div>
        <div className="mt-5"></div>
      </div>
      <ToastContainer />
    </>
  );
};

export default EnterPinStartup;
