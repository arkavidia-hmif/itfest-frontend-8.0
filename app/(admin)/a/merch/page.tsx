'use client';
/* eslint-disable max-len */
import MerchItem from '@/components/MerchStock/MerchItem';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { deleteMerch, getAllMerch, getMerchById } from '@/services/merchandise';
import Modal from '@/components/Modal';

interface MerchandiseData {
  id: number;
  name: string;
  startup: string;
  price: number;
  stock: number;
}

const MerchStockPage: React.FC = () => {
  const [merchandiseData, setMerchandiseData] = useState<MerchandiseData[]>([]);
  const [itemName, setItemName] = useState<string>('');
  const [merchValue, setMerchValue] = useState<string>('');
  const [showSucceedModal, setShowSucceedModal] = useState<boolean>(false);
  const [showFailedModal, setShowFailedModal] = useState<boolean>(false);
  const findMerchHandler = (e: any) => {
    setMerchValue(e.target.value);
  };

  const handleDeleteMerchant = async (id: number) => {
    const res1 = await getMerchById(id);
    const res2 = await deleteMerch(id);
    if (res2 === 201) {
      setShowSucceedModal(true);
      setItemName(res1.data.name);
      const filteredData = merchandiseData.filter((data) => data.id !== id);
      setMerchandiseData(filteredData);
    }
  };

  useEffect(() => {
    const fetchMerchandise = async () => {
      try {
        const res = await getAllMerch();
        if (res.data) {
          const responseData = res.data.filter((data: any) => {
            return data.name.toLowerCase().includes(merchValue.toLowerCase());
          });
          const mappedData = responseData.map((data: any) => {
            if (data.name.toLowerCase().includes(merchValue.toLowerCase())) {
              return {
                id: data.ID,
                name: data.name,
                startup: data.user.Name,
                price: data.point,
                stock: data.stock,
              };
            }
          });
          setMerchandiseData(mappedData);
        }
      }
      catch (e) {
        console.error(e);
      }
    };

    fetchMerchandise();
  }, [merchValue]);

  return (
    <div className="h-[calc(100vh)] flex flex-col justify-between">
      {/* Modals */}
      <div
        className={`${!showSucceedModal && !showFailedModal && 'hidden'
          } bg-arkav-grey-700/50 z-30 h-screen w-full flex items-center fixed top-0 left-0`}
      >
        <div
          className={`${!showSucceedModal && 'hidden'
            } z-40 mx-auto flex justify-center`}
        >
          <Modal
            status="success"
            icon="green-bag"
            item={itemName}
            scope="delete-merchant"
            onClickLanjutkan={() => {
              setShowSucceedModal(false);
            }}
            onClickTutup={() => setShowSucceedModal(false)}
          />
        </div>
        <div
          className={`${!showFailedModal && 'hidden'
            } z-40 mx-auto flex justify-center`}
        >
          <Modal
            status="fail"
            icon="sad-face"
            scope="add-merchant"
            onClickKembali={() => setShowFailedModal(false)}
            onClickTutup={() => setShowFailedModal(false)}
          />
        </div>
      </div>
      {/* Main Page */}
      <div className="flex flex-col justify-between h-full bg-white">
        <div>
          <div className="flex pt-11 pb-9 px-4 bg-[#1F307C]">
            <Link href="/a/dashboard" className="mr-2">
              <Image
                src="/icons/navigate-previous.png"
                alt="navigate-previous"
                width="24"
                height="24"
              />
            </Link>
            <div>
              <h6>MERCHANDISE</h6>
              <h6>STOCK</h6>
            </div>
            <Image
              className="-mb-9"
              src="/img/merch-icon.svg"
              alt="Merch Icon"
              width="152"
              height="103"
            />
          </div>
          <div className="relative mx-8 mt-4 mb-2">
            <input
              className="relative border rounded-md w-full p-2 pl-8 mb-2 text-xs placeholder-gray-300 focus:outline-none focus:shadow-outline"
              id="merchandise"
              placeholder="Masukkan merchandise"
              onChange={findMerchHandler}
            />
            <span className="absolute left-2 top-[9px] cursor-pointer">
              <Image
                src="/img/search.svg"
                alt="Search icon"
                width="16"
                height="16"
              />
            </span>
          </div>
          {merchandiseData.length > 0 ? (
            <div className="flex flex-col mx-4 max-h-[65vh]">
              <div className="overflow-y-auto">
                <div className="w-full inline-block">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-justify">
                      <thead className="bg-[#FFD271]">
                        <tr>
                          <th scope="col" className="w-[24px] px-2 py-1">
                            No
                          </th>
                          <th scope="col" className="w-[100px] px-2 py-1">
                            Nama Item
                          </th>
                          <th scope="col" className="w-[72px] px-4 py-1">
                            Startup
                          </th>
                          <th scope="col" className="w-[60px] px-3 py-1">
                            Harga
                          </th>
                          <th scope="col" className="w-[40px] py-1">
                            Sisa{' '}
                          </th>
                          <th className="w-[32px]"></th>
                        </tr>
                      </thead>
                      <tbody className="align-top">
                        {merchandiseData.map((data, idx) => (
                          <MerchItem
                            key={data.id}
                            id={data.id}
                            no={idx + 1}
                            name={data.name}
                            startup={data.startup}
                            price={data.price}
                            stock={data.stock}
                            dataCallback={handleDeleteMerchant}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center h-[50vh] justify-center w-[226px] mb-10 mx-auto text-center">
              <Image src="/img/error.svg" alt="Error" width="96" height="96" />
              <div className="text-sub-3">
                Yah Stock Merchandise Masih Kosong
              </div>
              <div className="text-body-3">
                Silakan tambahkan item merchandise
              </div>
            </div>
          )}
        </div>
        <div className="p-4">
          <Link href="/a/add-merch">
            <button className="bg-[#1F307C] text-white rounded-md w-full font-helvetica font-bold text-xs py-2 px-4">
              Tambah Merchandise
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MerchStockPage;
