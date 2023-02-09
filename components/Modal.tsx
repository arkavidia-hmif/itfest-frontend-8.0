/* eslint-disable max-len */
'use client';

import React from 'react';
import Image from 'next/image';

import GreenDiamond from '@/public/icons/green-diamond-icon.svg';
import SadFace from '@/public/icons/sad-face-icon.svg';
import YellowWarning from '@/public/icons/yellow-warning-icon.svg';
import RedCross from '@/public/icons/red-cross-icon.svg';
import GreenBag from '@/public/icons/green-bag-icon.svg';
import ButtonText from './ButtonText';

interface ModalProps {
  status?: 'success' | 'fail' | 'warning';
  point?: number;
  name?: string;
  icon?: 'green-diamond' | 'sad-face' | 'yellow-warning' | 'green-bag';
  item?: string;
  scope?:
    | 'submit-profile'
    | 'submit-clue'
    | 'grant-points'
    | 'redeem-points'
    | 'add-merchant';
  id?: number;
  onClickLanjutkan?: () => void;
  onClickKembali?: () => void;
  onClickTutup?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  name,
  point,
  status,
  icon,
  scope,
  id,
  item,
  onClickLanjutkan,
  onClickTutup,
  onClickKembali,
}) => {
  return (
    <>
      {status === 'success' && icon === 'green-diamond' && (
        <div
          className={
            'bg-white relative w-[70%] h-[349px] rounded rounded-b-xl flex flex-col gap-[20px]  items-center justify-center pb-4'
          }
        >
          <div>
            <Image
              src={RedCross}
              alt="Red Cross"
              className="absolute top-2 right-2 w-[18px] h-[18px] cursor-pointer"
              onClick={onClickTutup}
            />
            <Image
              src={GreenDiamond}
              alt="Green Diamond"
              className="w-[65px] h-[94px]"
            />
          </div>
          <div
            className="flex flex-col items-center justify-center font-helvetica text-[#0B1A5C] border-b-[1px] border-[#DBDDE0
] pb-3"
          >
            {scope === 'submit-profile' && (
              <div className="text-[24px] text-center">
                {point} Poin Didapatkan!
              </div>
            )}
            {scope === 'submit-clue' && (
              <div className="text-[24px] text-center">
                {point} Poin Didapatkan!
              </div>
            )}
            {scope === 'grant-points' && (
              <div className="text-[24px] text-center">
                {point} Poin Berhasil Dikirim!
              </div>
            )}
            {scope === 'redeem-points' && (
              <div className="text-[24px] text-center">
                {point} Poin Berhasil Dikirim!
              </div>
            )}



            {scope === 'submit-profile' && (
              <div className="text-[12px] text-center">
                Selamat! profilmu telah berhasil diperbarui
              </div>
            )}
            {scope === 'submit-clue' && (
              <div className="text-[12px] text-center">
                Selamat! kamu berhasil menebak clue, silakan lanjutkan
                perjalananmu
              </div>
            )}
            {scope === 'grant-points' && (
              <div className="text-[12px] text-center">
                Selamat! poin berhasil dikirim ke {name} {id}
              </div>
            )}
            {scope === 'redeem-points' && (
              <div className="text-[12px] text-center">
                Selamat! poin berhasil diklaim {name} {id}
              </div>
            )}
          </div>
          <ButtonText bgColor="primary" onClick={onClickLanjutkan}></ButtonText>
        </div>
      )}
      {status === 'fail' && icon === 'sad-face' && (
        <div className="bg-white relative w-[70%] h-[349px] rounded rounded-b-xl flex flex-col gap-[20px] items-center justify-center ">
          <div>
            <Image
              src={RedCross}
              alt="Red Cross"
              className="absolute top-2 right-2 w-[18px] h-[18px] "
              onClick={onClickTutup}
            />
            <Image src={SadFace} alt="Sad Face" className="w-[96px] h-[96px]" />
          </div>
          <div
            className="flex flex-col items-center font-helvetica text-[#0B1A5C] border-b-[1px] border-[#DBDDE0
] pb-3"
          >
            {scope === 'submit-profile' && (
              <div className="text-[24px] text-center">Yah, Gagal Submit</div>
            )}
            {scope === 'submit-profile' && (
              <div className="text-[12px] text-center">Silahkan coba lagi</div>
            )}

            {scope === 'submit-clue' && (
              <div className="text-[24px] text-center">
                Yah, Jawabanmu Kurang Tepat
              </div>
            )}
            {scope === 'submit-clue' && (
              <div className="text-[12px] text-center">Silahkan coba lagi</div>
            )}

            {scope === 'grant-points' && (
              <div className="text-[24px] text-center">
                Yah, Poin Gagal Dikirim
              </div>
            )}
            {scope === 'grant-points' && (
              <div className="text-[12px] text-center">Silahkan coba lagi</div>
            )}

            {scope === 'redeem-points' && (
              <div className="text-[24px] text-center">
                Yah, Poin Gagal Diklaim
              </div>
            )}
            {scope === 'redeem-points' && (
              <div className="text-[12px] text-center">Silahkan coba lagi</div>
            )}

            {scope === 'add-merchant' && (
              <div className="text-[24px] text-center">
                Yah, Item Gagal Ditambahkan
              </div>
            )}
            {scope === 'add-merchant' && (
              <div className="text-[12px] text-center">Silahkan coba lagi</div>
            )}
          </div>
          <ButtonText bgColor="secondary" onClick={onClickKembali}></ButtonText>
        </div>
      )}
      {status === 'warning' && icon === 'yellow-warning' && (
        <div className="bg-white relative w-[70%] h-[476px] rounded rounded-b-xl flex flex-col gap-[20px] items-center justify-center ">
          <div>
            <Image
              src={RedCross}
              alt="Red Cross"
              className="absolute top-2 right-2 w-[18px] h-[18px] "
              onClick={onClickTutup}
            />
            <Image
              src={YellowWarning}
              alt="Yellow Warning"
              className="w-[96px] h-[96px]"
            />
          </div>
          <div
            className="flex flex-col items-center font-helvetica text-[#0B1A5C] border-b-[1px] border-[#DBDDE0
] pb-3"
          >
            {scope === 'grant-points' && (
              <div className="text-[24px] text-center mx-4">
                {point} Poin Akan Dikirim
              </div>
            )}
            {scope === 'grant-points' && (
              <div className="text-[12px] text-center">
                Apakah kamu yakin ingin mengirimkan poin ke {name} ({id})?{' '}
              </div>
            )}

            {scope === 'redeem-points' && (
              <div className="text-[24px] text-center mx-4">
                Merchandise Akan Ditukar Dengan {point} Poin
              </div>
            )}
            {scope === 'redeem-points' && (
              <div className="text-[12px] text-center">
                Apakah kamu yakin ingin menukar poin dari {name} ({id})?{' '}
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <input type="checkbox" className="default:ring-2" />
            <div className="font-helvetica font-[400] text-[12px] text-[#F43518]">
              Jangan tampilkan pesan ini lagi
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ButtonText
              bgColor="primary"
              onClick={onClickLanjutkan}
            ></ButtonText>
            <ButtonText
              bgColor="secondary"
              onClick={onClickKembali}
            ></ButtonText>
          </div>
        </div>
      )}
      {status === 'success' &&
        icon === 'green-bag' &&
        scope === 'add-merchant' && (
          <div
            className={
              'bg-white relative w-[70%] h-[349px] rounded rounded-b-xl flex flex-col gap-[20px]  items-center justify-center pb-4'
            }
          >
            <div>
              <Image
                src={RedCross}
                alt="Red Cross"
                className="absolute top-2 right-2 w-[18px] h-[18px] "
                onClick={onClickTutup}
              />
              <Image
                src={GreenBag}
                alt="Green Diamond"
                className="w-[65px] h-[94px]"
              />
            </div>
            <div
              className="flex flex-col items-center font-helvetica text-[#0B1A5C] border-b-[1px] border-[#DBDDE0
] pb-3"
            >
              <div className="text-[24px]">Item Berhasil Ditambahkan</div>
              <div className="text-[12px]">
                Selamat! {item} berhasil ditambahkan!
              </div>
            </div>
            <ButtonText
              bgColor="primary"
              onClick={onClickLanjutkan}
            ></ButtonText>
          </div>
        )}
    </>
  );
};

export default Modal;
