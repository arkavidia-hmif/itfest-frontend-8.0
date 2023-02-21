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
import { getAllMerch, checkout } from '@/services/merchandise';
import { findUser } from '@/services/user';

interface RedeemPointsPageProps { }

interface CatalogueData {
  id: number;
  name: string;
  startup: string;
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
  userFound: boolean;
  pin: boolean;
  redeem: boolean;
  catalogue: boolean;
  warningModal: boolean;
  succeedModal: boolean;
  failedModal: boolean;
}

interface RedeemData {
  id: number;
  name: string;
  startup: string;
  price: number;
  stock: number;
  quantity: number;
}

const RedeemPointsPage: React.FC<RedeemPointsPageProps> = () => {
  const [pin, setPin] = useState('');
  const [totalPoint, setTotalPoint] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [catalogueData, setCatalogueData] = useState<CatalogueData[]>([]);
  const [dumpRedeemData, setDumpRedeemData] = useState<RedeemData[]>([]);
  const [redeemData, setRedeemData] = useState<RedeemData[]>([]);
  const [filteredRedeemData, setFilteredRedeemData] = useState<any[]>([]);
  const [toggle, setToggle] = useState<Toggle>({
    userFound: true,
    pin: true,
    redeem: false,
    catalogue: false,
    warningModal: false,
    succeedModal: false,
    failedModal: false,
  });
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '',
    userCode: 0,
    point: 5000,
  });

  const redeemHandler = () => {
    const fetchCheckout = async () => {
      try {
        await checkout(userProfile.userCode.toString(), redeemData.map(el => {
          return {
            merch_id: el.id,
            quantity: el.quantity
          };
        }));
        setToggle({
          ...toggle,
          warningModal: false,
          succeedModal: true
        });
        setDumpRedeemData([]);
        setRedeemData([]);
        setFilteredRedeemData([]);
      } catch (e) {
        console.error(e);
        setToggle({
          ...toggle,
          warningModal: false,
          failedModal: true,
        });
      }
    };
    fetchCheckout();
  };

  const merchChangeHandler = ({ id, startup, name, price, stock, quantity }: RedeemData) => {
    let dumpPoint = 0;
    let dumpQuantity = 0;
    let isDuplicate = false;
    dumpRedeemData.forEach(el => {
      if (el.id === id) {
        isDuplicate = true;
      }
    });
    if (isDuplicate) {
      setDumpRedeemData([...dumpRedeemData.filter(el => {
        if (el.id === id) {
          el.quantity = quantity;
        }
        return el;
      })]);
    } else {
      setDumpRedeemData([...dumpRedeemData, { id, startup, name, price, stock, quantity }]);
      dumpPoint += quantity * price;
      dumpQuantity += quantity;
    }
    dumpRedeemData.map(el => {
      dumpPoint += el.quantity * el.price;
      dumpQuantity += el.quantity;
    });
    setTotalPoint(dumpPoint);
    setTotalQuantity(dumpQuantity);
  };

  useEffect(() => {
    // fetch user
    const fetchUser = async (e: string) => {
      try {
        const res = await findUser(e);
        const responseData = res.data;
        const { name, username, usercode, role, point }: {
          name: string;
          username: string;
          usercode: string;
          role: string;
          point: number;
        } = responseData;

        if (name !== '' && username !== '' && usercode !== '' && role !== '') {
          setUserProfile({
            name: name,
            userCode: parseInt(usercode),
            point: point,
          });

          setToggle(prevState => ({
            ...prevState,
            pin: false,
            redeem: true,
            userFound: true,
          }));
        } else {
          alert('No user found');
        }
      } catch (e) {
        console.error(e);
      }
    };
    if (pin !== '') {
      fetchUser(pin);
    }
  }, [pin]);

  useEffect(() => {
    // fetch catalogue
    const fetchCatalogue = async () => {
      try {
        const res = await getAllMerch();
        const responseData = res.data;
        if (responseData) {
          const mappedData = responseData.map((data: any) => {
            return {
              status: 'sent',
              id: data.ID,
              name: data.name,
              startup: data.user.Name,
              price: data.point,
              stock: data.stock,
              enableQuantityInput: true,
            };
          });

          setCatalogueData(mappedData);
        }
      }
      catch (e) {
        console.error(e);
      }
    };
    fetchCatalogue();

    // Ubah struktur redeemData jadi filteredRedeemData (perstartup)
    let startups: string[] = [];
    redeemData.forEach(element => {
      if (startups.indexOf(element.startup) === -1) {
        startups.push(element.startup);
      }
    });
    startups.forEach(startup => {
      let items: any[] = [];
      redeemData.forEach(element => {
        if (startup == element.startup && element.quantity > 0) {
          items.push({
            name: element.name,
            price: element.price,
            stock: element.stock,
            quantity: element.quantity,
          });
        }
        setFilteredRedeemData([
          {
            startup: startup,
            items: items,
          }
        ]);
      });
    });
  }, [redeemData]);

  return (
    <div>
      <div className={`${!toggle.pin && 'hidden'}`}>
        <EnterPinField
          onClick={setPin}
        />
      </div>
      <div
        className={`${!toggle.warningModal &&
          !toggle.succeedModal &&
          !toggle.failedModal &&
          'hidden'
          } bg-arkav-grey-700/50 z-30 h-screen w-full flex items-center fixed top-0 left-0`}
      >
        <div
          className={`${!toggle.warningModal && 'hidden'
            } z-40 mx-auto flex justify-center`}
        >
          {/* warningModal */}
          <Modal
            name={userProfile.name}
            id={userProfile.userCode}
            point={totalPoint}
            status="warning"
            icon="yellow-warning"
            scope="redeem-points"
            onClickLanjutkan={redeemHandler}
            onClickTutup={() => setToggle({
              ...toggle,
              warningModal: false,
            })}
            onClickKembali={() => setToggle({
              ...toggle,
              warningModal: false,
            })}
          />
        </div>
        <div
          className={`${!toggle.succeedModal && 'hidden'
            } z-40 mx-auto flex justify-center`}
        >
          {/* succeedModal */}
          <Modal
            name={userProfile.name}
            id={userProfile.userCode}
            point={totalPoint}
            status="success"
            icon="green-diamond"
            scope="redeem-points"
            onClickLanjutkan={() => setToggle({
              ...toggle,
              succeedModal: false,
            })}
            onClickTutup={() => setToggle({
              ...toggle,
              succeedModal: false,
            })}
          />
        </div>
        <div
          className={`${!toggle.failedModal && 'hidden'
            } z-40 mx-auto flex justify-center`}
        >

          {/* failedModal */}
          <Modal
            name={userProfile.name}
            id={userProfile.userCode}
            point={300}
            status="fail"
            icon="sad-face"
            scope="redeem-points"
            onClickTutup={() => setToggle({
              ...toggle,
              failedModal: false,
            })}
            onClickKembali={() => setToggle({
              ...toggle,
              failedModal: false,
            })}
          />
        </div>
      </div>
      <div className={`${!toggle.redeem && 'hidden'}`}>
        <div className="h-[calc(100vh)] flex flex-col justify-between">
          <div
            className={`${toggle.catalogue ? 'hidden' : 'block'
              } flex flex-col justify-between h-full`}
          >
            <div>
              <div className="flex pt-11 pb-4 px-4 bg-[#069154]">
                <Link href="/a/dashboard" className="mr-2">
                  <Image
                    src="/icons/navigate-previous.png"
                    alt="navigate-previous"
                    width="24"
                    height="24"
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
              <div className="flex flex-col border rounded-xl px-4 mx-4 py-3 my-4">
                <span>Redeeming points to:</span>
                <span className="mt-1 mb-4 w-full text-center font-semibold bg-black text-white">
                  {userProfile.name} ({userProfile.userCode})
                </span>
                <span>Pilihan merchandise:</span>
                <div className="bg-[#F9F9F9] rounded-md mb-1">
                  {filteredRedeemData.map((el, idx) => (
                    <Merchandise
                      key={idx}
                      startup={el.startup}
                      items={el.items}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setToggle({
                    ...toggle,
                    catalogue: !toggle.catalogue,
                  })}
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
                <span className="text-3xl font-bold">{totalPoint}</span>
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
                    <span className="text-xl font-bold">
                      {userProfile.point}
                    </span>
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
                    <span className="text-xl font-bold">
                      {userProfile.point - totalPoint}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='sticky bottom-0'>
              <div className={`${!toggle.userFound && 'hidden'} flex text-sm items-center py-2 mb-4 mx-6 bg-[#F9F9F9] px-3 border-[#3FB160] border rounded-xl`}>
                <Image
                  src="/img/Checklist.svg"
                  alt="Checklist"
                  width="32"
                  height="32"
                />
                <span className="ml-3 mr-4">
                  User ditemukan. Silakan lakukan transaksi poin!
                </span>
                <button
                  onClick={() => setToggle({
                    ...toggle,
                    userFound: false,
                  })}
                >
                  <Image
                    className="m-1"
                    src="/img/Close.svg"
                    alt="Close"
                    width="16"
                    height="16"
                  />
                </button>
              </div>
              <div className="p-4 bg-white">
                <button
                  disabled={redeemData.length === 0}
                  className={`${redeemData.length === 0 ? 'bg-[#BFBFBF]' : 'bg-[#1F307C]'} text-white rounded-md w-full font-helvetica font-bold text-xs py-3 px-4`}
                  onClick={() => setToggle({
                    ...toggle,
                    warningModal: true,
                  })}
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
            <div className="pt-[44px] pb-7 flex flex-row bg-[#1F307C] px-4 relative">
              <div className="flex flex-row gap-3 items-center z-10">
                <Image
                  className="cursor-pointer"
                  src="/icons/left-arrow.svg"
                  width={24}
                  height={24}
                  alt="Left Arrow"
                  onClick={() => setToggle({
                    ...toggle,
                    catalogue: !toggle.catalogue,
                  })}
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
              {catalogueData.map((data) => (data.stock > 0 &&
                <CatalogueItem
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  price={data.price}
                  startup={data.startup}
                  stock={data.stock}
                  enableQuantityInput={data.enableQuantityInput}
                  // onChangeQuantity={(q) => setTotalQuantity(q)}
                  dataCallback={merchChangeHandler}
                />
              ))}
            </div>

            {/* Footer */}
            <div className={`${totalQuantity === 0 && 'hidden'} bg-white shadow-sm bottom-0 p-4 flex flex-col w-full mt-auto`}>
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
                    className={`font-bold text-body-3 ${userProfile.point >= totalPoint
                      ? 'text-arkav-green'
                      : 'text-arkav-red'
                      }`}
                  >
                    {userProfile.point}
                  </p>
                </div>
              </div>

              {/* Label poin */}
              <div
                className={`flex justify-center border-2 ${userProfile.point >= totalPoint
                  ? 'border-arkav-green bg-arkav-green-light'
                  : 'border-arkav-red bg-arkav-pink-light'
                  } 
              rounded-xl my-4`}
              >
                <p
                  className={`font-bold ${userProfile.point >= totalPoint
                    ? 'text-arkav-green'
                    : 'text-arkav-red'
                    }`}
                >
                  {userProfile.point >= totalPoint
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
                <p className="flex font-bold font-helvetica text-body-1">{`${totalQuantity} item`}</p>
                <div className="flex flex-row">
                  <Image
                    className="mr-1"
                    src="/icons/point-highlight.svg"
                    alt="Points"
                    height={24}
                    width={16}
                  />
                  <p
                    className={`font-bold text-body-1 ${userProfile.point >= totalPoint
                      ? 'text-arkav-green'
                      : 'text-arkav-red'
                      }`}
                  >
                    {totalPoint}
                  </p>
                </div>
              </div>

              {/* Button */}
              <button
                disabled={totalQuantity === 0}
                className={`text-white rounded-md w-full font-helvetica font-bold text-xs py-3 px-4 ${userProfile.point >= totalPoint
                  ? 'bg-arkav-blue'
                  : 'bg-arkav-grey-300'
                  }`}
                onClick={() => {
                  setToggle({
                    ...toggle,
                    catalogue: !toggle.catalogue,
                  });
                  setRedeemData(dumpRedeemData);
                }}
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
