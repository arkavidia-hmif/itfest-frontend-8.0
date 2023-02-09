/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
'use client';

import React, { useEffect, useState } from 'react';
import { getProfile, submitProfile } from '@/services/user';
import Header from './Header';
import Dropdown from './Dropdown';
import Modal from '../Modal';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface ProfileData {
  email: string;
  birthdate: string;
  gender: string;
  interests: string[];
}

const Profile: React.FC = () => {
  const router = useRouter();
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<any[]>([]);
  const [hasSubmittedBefore, setHasSubmittedBefore] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await getProfile();
        const responseData = res.data;
        setHasSubmittedBefore(responseData.submitted);
        const mappedData = () => {
          return {
            email: responseData.email,
            birthdate: responseData.birthdate,
            gender: responseData.gender,
            interests: responseData.interests,
          };
        };

        setProfileData(mappedData);
        setSelectedCheckboxes(responseData.interests);
      } catch (e) {
        console.error(e);
      }
    };

    fetchAll();
  }, []);

  const [submitAvailable, setSubmitAvailable] = useState(false);
  const handleSubmitBtn = () => {
    setSubmitAvailable(!submitAvailable);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (selectedCheckboxes.includes(value)) {
      setSelectedCheckboxes(selectedCheckboxes.filter(v => v !== value));
    } else {
      setSelectedCheckboxes([
        ...selectedCheckboxes, 
        value]);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const dataChoosen = (childdata: any) => {
    if (childdata == "Perempuan") {
      childdata = "female";
    } else {
      childdata = "male";
    }

    const newMappedData = () => {
      return {
        email: profileData.email,
        birthdate: profileData.birthdate,
        gender: childdata,
        interests: profileData.interests,
      };
    };
    setProfileData(newMappedData);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      email: profileData.email,
      birthdate: profileData.birthdate,
      gender: profileData.gender,
      interests: selectedCheckboxes,
    };

    setIsLoading(true);
  
    try {
      await submitProfile(
        payload.email,
        payload.birthdate,
        payload.gender,
        payload.interests
      );

      // modals success
      if (hasSubmittedBefore) {
        //modals tidak dapat poin
        toast.success('Submit successful');
        
        setTimeout(() => {
          router.push('/u/dashboard');
        }, 500);
      } else {
        //modals dapat poin

        setModalStatus("success");
        setPopup(true);
      }
    } catch (e) {
      console.error(e);

      // modals failed
      setModalStatus("fail");
      setPopup(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePopupDashboard = () => {
    setTimeout(() => {
      router.push('/u/dashboard');
    }, 200);
  };

  const handlePopupProfile = () => {
    setPopup(false);
    setIsLoading(false);
  };

  const [popup, setPopup] = useState(false);
  const [modalStatus, setModalStatus] = useState("");

  var placeholderStyles = {
    color: "#BFBFBF",
  };

  const handleGender = () => {
    if (profileData.gender == "male") {
      return 'Laki-laki';
    } else if (profileData.gender == "female") {
      return 'Perempuan';
    } else {
      return '';
    }
  };

  function formatDate(date: string | number | Date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  var today = new Date();

  return (
    <>
      <div className="h-screen flex flex-col justify-between relative">
        {popup && modalStatus == "success" && (
          <div className='z-20 w-full absolute flex items-center justify-center h-screen drop-shadow-2xl backdrop-blur-sm'>
            <Modal 
              status={modalStatus}
              point={300} 
              icon='green-diamond' 
              scope='submit-profile'
              onClickLanjutkan={handlePopupDashboard}
              onClickTutup={handlePopupDashboard}
            />
          </div>
        )}
        {popup && modalStatus == "fail" && (
          <div className='z-20 w-full absolute flex items-center justify-center h-screen drop-shadow-2xl backdrop-blur-sm'>
            <Modal 
              status={modalStatus}
              icon='sad-face' 
              scope='submit-profile'
              onClickKembali={handlePopupProfile}
              onClickTutup={handlePopupDashboard}
            />
          </div>
        )}
        <div className="flex flex-col justify-between h-full bg-white">
          <div>
            <Header title="Complete Profile" />
            <div className="w-full bg-white">
              <div className="mx-5">
                <p className="text-xs font-helvetica text-[#535252] mb-2">
                  Lengkapi profilmu dulu yuk sebelum melakukan eksplorasi!
                </p>
                <div className="flex flex-col h-[calc(100vh-222px)] font-helvetica bg-[#F9F9F9] rounded-md p-4">
                  <div className="overflow-y-auto">
                    <label className="font-bold text-xs mb-1">Email</label>
                    <input
                      className="border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:border-gray-400"
                      id="email"
                      type="text"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      placeholder="Masukkan email"
                    />
                    <div className="relative cursor-pointer">
                      <label className="font-bold text-xs mb-1">
                        Tanggal Lahir
                      </label>
                      <input
                        className="relative border rounded-md w-full p-2 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:border-gray-400"
                        id="birthdate"
                        type="date"
                        max={formatDate(today)}
                        name="birthdate"
                        style={!profileData.birthdate ? placeholderStyles : {}}
                        value={profileData.birthdate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="relative">
                      <label className="font-bold text-xs mb-1">
                        Jenis Kelamin
                      </label>
                      <Dropdown
                        placeholder="Pilih jenis kelamin"
                        data={['Laki-laki', 'Perempuan']}
                        selected={handleGender()}
                        dataChoosen={dataChoosen}
                      />
                    </div>
                    <label className="font-bold text-xs mb-1">
                      Ketertarikan
                    </label>
                    <p className="text-xs font-helvetica text-[#535252] mb-2">
                      Pilih bidang yang kamu minati
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex font-helvetica text-xs items-center mb-2">
                          <input
                            type="checkbox"
                            id="software-engineering"
                            className="mr-1 accent-[#FEB20E]"
                            value="software-engineering"
                            checked={selectedCheckboxes.includes("software-engineering")}
                            onChange={handleCheckboxChange}
                          />
                          <label>Software Engineering</label>
                        </div>
                        <div className="flex font-helvetica text-xs items-center mb-2">
                          <input
                            type="checkbox"
                            id="product-management"
                            className="mr-1 accent-[#FEB20E]"
                            value="product-management"
                            checked={selectedCheckboxes.includes("product-management")}
                            onChange={handleCheckboxChange}
                          />
                          <label>Product Management</label>
                        </div>
                        <div className="flex font-helvetica text-xs items-center mb-2">
                          <input
                            type="checkbox"
                            id="ui-designer"
                            className="mr-1 accent-[#FEB20E]"
                            value="ui-designer"
                            checked={selectedCheckboxes.includes("ui-designer")}
                            onChange={handleCheckboxChange}
                          />
                          <label>UI Designer</label>
                        </div>
                        <div className="flex font-helvetica text-xs items-center mb-2">
                          <input
                            type="checkbox"
                            id="ux-designer"
                            className="mr-1 accent-[#FEB20E]"
                            value="ux-designer"
                            checked={selectedCheckboxes.includes("ux-designer")}
                            onChange={handleCheckboxChange}
                          />
                          <label>UX Designer</label>
                        </div>
                        <div className="flex font-helvetica text-xs items-center mb-2">
                          <input
                            type="checkbox"
                            id="ux-researcher"
                            className="mr-1 accent-[#FEB20E]"
                            value="ux-researcher"
                            checked={selectedCheckboxes.includes("ux-researcher")}
                            onChange={handleCheckboxChange}
                          />
                          <label>UX Researcher</label>
                        </div>
                        <div className="flex font-helvetica text-xs items-center mb-2">
                          <input
                            type="checkbox"
                            id="it-consultant"
                            className="mr-1 accent-[#FEB20E]"
                            value="it-consultant"
                            checked={selectedCheckboxes.includes("it-consultant")}
                            onChange={handleCheckboxChange}
                          />
                          <label>IT Consultant</label>
                        </div>
                      </div>
                      <div>
                        <div className="flex font-helvetica text-xs items-center mb-2">
                          <input
                            type="checkbox"
                            id="game-developer"
                            className="mr-1 accent-[#FEB20E]"
                            value="game-developer"
                            checked={selectedCheckboxes.includes("game-developer")}
                            onChange={handleCheckboxChange}
                          />
                          <label>Game Developer</label>
                        </div>
                        <div className="flex font-helvetica text-xs items-center mb-2">
                          <input
                            type="checkbox"
                            id="cyber-security"
                            className="mr-1 accent-[#FEB20E]"
                            value="cyber-security"
                            checked={selectedCheckboxes.includes("cyber-security")}
                            onChange={handleCheckboxChange}
                          />
                          <label>Cyber Security</label>
                        </div>
                        <div className="flex font-helvetica text-xs items-center mb-2">
                          <input
                            type="checkbox"
                            id="business-analyst"
                            className="mr-1 accent-[#FEB20E]"
                            value="business-analyst"
                            checked={selectedCheckboxes.includes("business-analyst")}
                            onChange={handleCheckboxChange}
                          />
                          <label>Business Analyst</label>
                        </div>
                        <div className="flex font-helvetica text-xs items-center mb-2">
                          <input
                            type="checkbox"
                            id="business-intelligence"
                            className="mr-1 accent-[#FEB20E]"
                            value="business-intelligence"
                            checked={selectedCheckboxes.includes("business-intelligence")}
                            onChange={handleCheckboxChange}
                          />
                          <label>Business Intelligence</label>
                        </div>
                        <div className="flex font-helvetica text-xs items-center mb-2">
                          <input
                            type="checkbox"
                            id="data-scientist"
                            className="mr-1 accent-[#FEB20E]"
                            value="data-scientist"
                            checked={selectedCheckboxes.includes("data-scientist")}
                            onChange={handleCheckboxChange}
                          />
                          <label>Data Scientist</label>
                        </div>
                        <div className="flex font-helvetica text-xs items-center mb-2">
                          <input
                            type="checkbox"
                            id="data-analyst"
                            className="mr-1 accent-[#FEB20E]"
                            value="data-analyst"
                            checked={selectedCheckboxes.includes("data-analyst")}
                            onChange={handleCheckboxChange}
                          />
                          <label>Data Analyst</label>
                        </div>
                      </div>
                    </div>

                    <label className="font-bold text-xs mb-1">Consent</label>
                    <div>
                      <p className="text-xs font-helvetica text-[#535252] mb-2 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed auctor faucibus elementum. Cras a felis auctor,
                        malesuada enim nec, viverra leo. Nulla mollis, lorem a
                        hendrerit iaculis, justo diam tincidunt tortor, lobortis
                        aliquet arcu justo ut enim. Donec mollis erat odio, nec
                        viverra felis pretium ut. Aenean pulvinar ipsum quam,
                        vitae gravida nibh ornare ac. Quisque gravida massa in
                        sapien vulputate, eget blandit augue faucibus. In mollis
                        feugiat dolor in congue. Donec risus nisl, tempus vel ex
                        eget, hendrerit rutrum ex. Praesent interdum augue quis
                        sodales tempus.
                      </p>
                      <div className="flex font-helvetica text-xs items-center mb-2">
                        <input
                          type="checkbox"
                          id="terms-conditions"
                          className="mr-1 accent-[#FEB20E]"
                          onChange={handleSubmitBtn}
                        />
                        <label className="text-[#0B0A0A]">
                          Saya telah membaca dan menyetujui hal tersebut
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white sticky bottom-0 left-0 right-0 py-4 px-5 border-t-[1px] border-[#F9F9F9]">
            {submitAvailable ? (
              <form onSubmit={handleSubmit}>
                <button 
                  type="submit"
                  className="w-full rounded-md bg-[#1F307C] font-helvetica font-bold text-xs text-center text-white h-10 tracking-wide"
                  disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Submit'}
                </button>
              </form>
            ) : (
              <button className="cursor-not-allowed w-full rounded-md bg-[#BFBFBF] font-helvetica font-bold text-xs text-center text-white h-10 tracking-wide">
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Profile;
