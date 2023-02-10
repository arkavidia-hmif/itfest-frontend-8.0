'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import { grantPoints } from '@/services/point';
import Modal from '@/components/Modal';
import { findUser } from '@/services/user';
import LeftArrow from '@/public/icons/left-arrow-icon.svg';
import Link from 'next/link';

interface GrantPointsPageProps { }

const GrantPointsPage: React.FC<GrantPointsPageProps> = () => {
    const [pinValues, setPinValues] = useState(['', '', '', '', '', '']);
    const [userCode, setUserCode] = useState('');
    const [isCheckUserCode, setIsCheckUserCode] = useState(false);

    const [username, setUsername] = useState('');
    const [isUserCodeFound, setIsUserCodeFound] = useState(false);
    const [isCustomChecked, setIsCustomChecked] = useState(false);
    const [point, setPoint] = useState(0);
    const [customPoint, setCustomPoint] = useState('0');
    const [totalPoint, setTotalPoint] = useState(0);

    const [isShowWarningModal, setIsShowWarningModal] = useState(false);
    const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
    const [isShowFailModal, setIsShowFailModal] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [disableConfirmation, setDisableConfirmation] = useState(false); 

    useEffect(() => {
        if (isCheckUserCode) {
            const fetchUser = async () => {
                try {
                    setIsLoading(true);
                    const res = await findUser(userCode);
                    const responseData = res.data;

                    if (responseData.usercode !== userCode) {
                        toast.error('User dengan pin<' + userCode + '> tidak ditemukan. Harap coba lagi.', {
                            position: "bottom-center"
                        });
                        const inputBoxes = document.getElementsByClassName('pin-box');
                        Array.from(inputBoxes).forEach((box: any) => box.value = '');
                    } else {
                        setIsUserCodeFound(true);
                        setUsername(responseData.username);
                    }
                } catch (e) {
                    console.error(e);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchUser();
        }
    }, [userCode, isCheckUserCode]);

    useEffect(() => {
        if (isUserCodeFound) {
            toast.success('User ditemukan. Silakan lakukan transaksi poin!', {
                position: "bottom-center"
            });
        }
    }, [isUserCodeFound]);

    useEffect(() => {
        if (isCustomChecked) {
            setTotalPoint(point + (+customPoint));
        } else {
            setTotalPoint(point);
        }
    }, [isCustomChecked, customPoint, point]);

    const onSubmitPin = () => {
        setUserCode(pinValues.join(''));
        setIsCheckUserCode(true);
    };

    const handleChangePin = (e: any) => {
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

        const newValues = [...pinValues];
        newValues[fieldIndex] = value;
        setPinValues(newValues);
    };

    const onClickBackToEnterPin = () => {
        window.location.reload();
    };

    const onChangeEasy = (e: any) => {
        if (e.target.checked) {
            setPoint(point + 25);
        } else {
            setPoint(point - 25);
        }
    };

    const onChangeMedium = (e: any) => {
        if (e.target.checked) {
            setPoint(point + 50);
        } else {
            setPoint(point - 50);
        }
    };

    const onChangeHard = (e: any) => {
        if (e.target.checked) {
            setPoint(point + 75);
        } else {
            setPoint(point - 75);
        }
    };

    const onChangeCustom = (e: any) => {
        setIsCustomChecked(e.target.checked);
        if (e.target.checked) {
            const customInput = document.querySelector('input[type=number]');
            if (customInput !== null) {
                (customInput as HTMLElement).focus();
            }
        }
    };

    const onChangeCustomPoint = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(+e.target.value)) return;
        if (e.target.value === '') {
            setCustomPoint('0');
            return;
        }
        setCustomPoint(parseInt(e.target.value).toString());
    };

    const onClickGrant = () => {
        setIsShowWarningModal(true);
    };

    const onClickNextGrant = async () => {
        setIsShowWarningModal(false);
        try {
            setIsLoading(true);
            await grantPoints(userCode, totalPoint);
            setIsShowSuccessModal(true);
        } catch (e) {
            setIsShowFailModal(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDone = () => {
        setIsShowSuccessModal(false);
        setPinValues(['', '', '', '', '', '']);
        setUserCode("");
        setIsCheckUserCode(false);
        setUsername('');
        setIsUserCodeFound(false);
        setIsCustomChecked(false);
        setPoint(0);
        setCustomPoint('0');
        setTotalPoint(0);
        setIsShowWarningModal(false);
        setIsShowSuccessModal(false);
        setIsShowFailModal(false);
    }

    if (!isUserCodeFound) {
        return (
            <>
                <div className="bg-white h-[calc(100vh)] flex flex-col">
                    <div className="flex">
                        <Link className="mt-5 ml-4" href="/s/dashboard">
                            <Image src={LeftArrow} alt="Left Arrow" />
                        </Link>
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
                                    {pinValues.map((_, index) => (
                                        <input
                                            maxLength={1}
                                            key={index}
                                            type="number"
                                            className="pin-box p-3 border border-gray-300 rounded-md w-[48px]
                                            h-[80px] mx-[4px] placeholder-slate-400 text-[36px] font-[900] font-archivo"
                                            name={`field-${index}`}
                                            onChange={handleChangePin}
                                        />
                                    ))}
                                </div>

                                <button
                                    className="fixed bottom-[16px] font-helvetica font-bold text-[12px] rounded-xl 
                                    bg-[#1F307C] text-[#FFFFFF] w-[328px] h-[40px] disabled:cursor-auto
                                    disabled:bg-arkav-grey-400"
                                    onClick={onSubmitPin}
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Loading..." : "Submit"}
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
    } else {
        return (
            <div>
                {isShowWarningModal && (
                    <div className="bg-arkav-grey-700/50 z-30 h-screen w-full flex items-center fixed top-0 left-0">
                        <div className="z-40 w-full flex justify-center">
                            <Modal
                                id={Number(userCode)}
                                name={username}
                                status="warning"
                                point={totalPoint}
                                icon="yellow-warning"
                                scope="grant-points"
                                onClickLanjutkan={onClickNextGrant}
                                onChecked={(check) => setDisableConfirmation(check)}
                                onClickKembali={() => setIsShowWarningModal(false)}
                                onClickTutup={() => setIsShowWarningModal(false)}
                            />
                        </div>
                    </div>
                )}
                {isShowSuccessModal && (
                    <div className="bg-arkav-grey-700/50 z-30 h-screen w-full flex items-center fixed top-0 left-0">
                        <div className="z-40 w-full flex justify-center">
                            <Modal
                                id={Number(userCode)}
                                name={username}
                                status="success"
                                point={totalPoint}
                                icon="green-diamond"
                                scope="grant-points"
                                onClickLanjutkan={() => handleDone()}
                                onClickTutup={() => handleDone()}
                            />
                        </div>
                    </div>
                )}
                {isShowFailModal && (
                    <div className="bg-arkav-grey-700/50 z-30 h-screen w-full flex items-center fixed top-0 left-0">
                        <div className="z-40 w-full flex justify-center">
                            <Modal
                                status="fail"
                                icon="sad-face"
                                scope="grant-points"
                                onClickKembali={() => setIsShowFailModal(false)}
                                onClickTutup={() => setIsShowFailModal(false)}
                            />
                        </div>
                    </div>
                )}
                <div className='h-[calc(100vh)] flex flex-col justify-between'>
                    <div className="flex flex-col justify-between h-full bg-white">
                        <div>
                            <div className='flex pt-11 pb-9 px-4 bg-[#069154]'>
                                <div className='mr-2 hover:cursor-pointer' onClick={onClickBackToEnterPin}>
                                    <Image
                                        src="/icons/navigate-previous.png"
                                        alt="navigate-previous"
                                        width="24"
                                        height="24" />
                                </div>
                                <div>
                                    <h6>GRANT</h6>
                                    <h6>POINTS</h6>
                                </div>
                            </div>

                            <div className='m-4 px-4 py-2 border border-gray-300 rounded-md'>
                                <p className='mb-2 font-helvetica text-xs'>Mengirim poin ke:</p>
                                <div className='bg-black w-full text-white font-helvetica text-xs font-bold p-1 
                                    text-center'
                                >
                                    {username}({userCode})
                                </div>
                                <p className='my-2 font-helvetica text-xs'>Pilih kesulitan challenge</p>
                                <div className='flex font-helvetica text-xs items-center mb-2'>
                                    <input
                                        type="checkbox"
                                        id={"Easy"}
                                        className='mr-1 accent-[#FEB20E]'
                                        onChange={onChangeEasy}
                                    />
                                    <label htmlFor={"Easy"}>Easy</label>
                                </div>
                                <div className='flex font-helvetica text-xs items-center mb-2'>
                                    <input
                                        type="checkbox"
                                        id={"Medium"}
                                        className='mr-1 accent-[#FEB20E]'
                                        onChange={onChangeMedium}
                                    />
                                    <label htmlFor={"Medium"}>Medium</label>
                                </div>
                                <div className='flex font-helvetica text-xs items-center mb-2'>
                                    <input
                                        type="checkbox"
                                        id={"Hard"}
                                        className='mr-1 accent-[#FEB20E]'
                                        onChange={onChangeHard}
                                    />
                                    <label htmlFor={"Hard"}>Hard</label>
                                </div>
                                <div className='flex font-helvetica text-xs items-center mb-2'>
                                    <input
                                        type="checkbox"
                                        id={"Custom"}
                                        name={"Custom"}
                                        className='mr-1 accent-[#FEB20E]'
                                        onChange={onChangeCustom}
                                    />
                                    <div>
                                        <label htmlFor={"Custom"}>{"Custom:"}</label>
                                        {isCustomChecked && <input type="number" className="w-8 border-b-2 px-1" min="0"
                                            id='customInput' onChange={onChangeCustomPoint} value={customPoint} />}
                                    </div>
                                </div>
                            </div>
                            <div className='m-4 flex flex-col items-center'>
                                <Image
                                    src="/img/grant-points-fox.png"
                                    alt="fox"
                                    width="600"
                                    height="300"
                                    className='mb-3'
                                />
                                <h6 className='pb-3'>GRANT</h6>
                                <div className='flex items-center'>
                                    <Image src="/img/level.png" alt="level" width="22" height="32" />
                                    <p className='pl-1 font-archivo text-2xl font-bold'>
                                        {totalPoint}
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="p-4">
                            <button 
                                className="bg-[#1F307C] text-white rounded-md w-full font-helvetica font-bold
                                text-xs py-2 px-4 disabled:cursor-auto disabled:bg-arkav-grey-400"
                                onClick={disableConfirmation ? onClickNextGrant : onClickGrant}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Loading...' : "Grant"}
                            </button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
};

export default GrantPointsPage;
