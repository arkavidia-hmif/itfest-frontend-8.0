/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
'use client';

import React, { useEffect, useState } from 'react';
import { profile } from '@/services/user';
import Header from './Header';
import Link from 'next/link';
import Dropdown from './Dropdown';

interface ProfileProps {
  dummyProp?: any;
}

const Profile: React.FC<ProfileProps> = ({ dummyProp }) => {
  useEffect(() => {
    const dummyProfile = async () => {
      const data = await profile();
      console.log(data);
    };

    dummyProfile();
  }, []);

  const [submitAvailable, setSubmitAvailable] = useState(false);
  const handleSubmitBtn = () => {
    setSubmitAvailable(!submitAvailable);
  };

  return(
    <>
      <div className='h-screen flex flex-col justify-between'>
        <div className="flex flex-col justify-between h-full bg-white">
          <div>
            <Header title="Complete Profile" />
            <div className='w-full bg-white'>
              <div className="mx-5">
                <p className='text-xs font-helvetica text-[#535252] mb-2'>Lengkapi profilmu dulu yuk sebelum melakukan eksplorasi!</p>
                <div className='flex flex-col h-[calc(100vh-222px)] font-helvetica bg-[#F9F9F9] rounded-md p-4'>
                  <div className="overflow-y-auto">
                    <label className="font-bold text-xs mb-1">
                      Email
                    </label>
                    <input className="border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:border-gray-400" id="email" type="text" placeholder="Masukkan email" />
                    <div className="relative cursor-pointer">
                      <label className="font-bold text-xs mb-1">
                        Tanggal Lahir
                      </label>
                      <input
                      className="relative border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:border-gray-400" id="ttl"
                      type="date"
                      />
                    </div>
                    <div className="relative">
                      <label className="font-bold text-xs mb-1">
                        Jenis Kelamin
                      </label>
                      <Dropdown 
                        data={["Laki-laki", "Perempuan", "Lainnya"]}
                      />
                    </div>
                    <label className="font-bold text-xs mb-1">
                      Ketertarikan
                    </label>
                    <p className='text-xs font-helvetica text-[#535252] mb-2'>Pilih bidang yang kamu minati</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                          <input type="checkbox" id="software-engineering" className='mr-1 accent-[#FEB20E]' />
                          <label>Software Engineering</label>
                        </div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                          <input type="checkbox" id="product-management" className='mr-1 accent-[#FEB20E]' />
                          <label>Product Management</label>
                        </div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                          <input type="checkbox" id="ui-designer" className='mr-1 accent-[#FEB20E]' />
                          <label>UI Designer</label>
                        </div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                          <input type="checkbox" id="ux-designer" className='mr-1 accent-[#FEB20E]' />
                          <label>UX Designer</label>
                        </div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                          <input type="checkbox" id="ux-researcher" className='mr-1 accent-[#FEB20E]' />
                          <label>UX Researcher</label>
                        </div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                          <input type="checkbox" id="it-consultant" className='mr-1 accent-[#FEB20E]' />
                          <label>IT Consultant</label>
                        </div>
                      </div>
                      <div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                          <input type="checkbox" id="game-developer" className='mr-1 accent-[#FEB20E]' />
                          <label>Game Developer</label>
                        </div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                          <input type="checkbox" id="cyber-security" className='mr-1 accent-[#FEB20E]' />
                          <label>Cyber Security</label>
                        </div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                          <input type="checkbox" id="business-analyst" className='mr-1 accent-[#FEB20E]' />
                          <label>Business Analyst</label>
                        </div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                          <input type="checkbox" id="business-intelligence" className='mr-1 accent-[#FEB20E]' />
                          <label>Business Intelligence</label>
                        </div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                          <input type="checkbox" id="data-scientist" className='mr-1 accent-[#FEB20E]' />
                          <label>Data Scientist</label>
                        </div>
                        <div className='flex font-helvetica text-xs items-center mb-2'>
                          <input type="checkbox" id="data-analyst" className='mr-1 accent-[#FEB20E]' />
                          <label>Data Analyst</label>
                        </div>
                      </div>
                    </div>

                    <label className="font-bold text-xs mb-1">
                      Consent
                    </label>
                    <div>
                      <p className='text-xs font-helvetica text-[#535252] mb-2 text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor faucibus elementum. Cras a felis auctor, malesuada enim nec, viverra leo. Nulla mollis, lorem a hendrerit iaculis, justo diam tincidunt tortor, lobortis aliquet arcu justo ut enim. Donec mollis erat odio, nec viverra felis pretium ut. Aenean pulvinar ipsum quam, vitae gravida nibh ornare ac. Quisque gravida massa in sapien vulputate, eget blandit augue faucibus. In mollis feugiat dolor in congue. Donec risus nisl, tempus vel ex eget, hendrerit rutrum ex. Praesent interdum augue quis sodales tempus.
                      </p>
                      <div className='flex font-helvetica text-xs items-center mb-2'>
                        <input type="checkbox" id="terms-conditions" className='mr-1 accent-[#FEB20E]' onChange={handleSubmitBtn} />
                        <label className='text-[#0B0A0A]'>Saya telah membaca dan menyetujui hal tersebut</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
          <div className="bg-white sticky bottom-0 left-0 right-0 py-4 px-5 border-t-[1px] border-[#F9F9F9]">
            {(submitAvailable) ? (
              <Link href="#">
                <button className="w-full rounded-md bg-[#1F307C] font-helvetica font-bold text-xs text-center text-white h-10 tracking-wide">
                  Submit
                </button>
              </Link>
            ) : (
              <button className="cursor-not-allowed w-full rounded-md bg-[#BFBFBF] font-helvetica font-bold text-xs text-center text-white h-10 tracking-wide">
                Submit
              </button>
            )}
            
          </div>  
        </div>
      </div>
    </>
  );
};

export default Profile;