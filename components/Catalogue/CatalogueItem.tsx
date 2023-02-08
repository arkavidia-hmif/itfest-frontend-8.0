'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface CatalogueItemProps {
  id: number;
  startup: string;
  name: string;
  price: number;
  stock: number;
  enableQuantityInput?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChangeQuantity?: (quantity: number) => void;
  dataCallback?: ({ id, startup, name, price, stock, quantity }: {
    id: number;
    startup: string;
    name: string;
    price: number;
    stock: number;
    quantity: number;
  }) => void;
}

const CatalogueItem: React.FC<CatalogueItemProps> = ({
  id,
  startup,
  name,
  price = 0,
  stock = 0,
  enableQuantityInput,
  onChangeQuantity,
  dataCallback
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      if (dataCallback) {
        dataCallback({
          id, startup, name, price, stock,
          quantity: quantity + 1,
        });
      }
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      if (dataCallback) {
        dataCallback({
          id, startup, name, price, stock,
          quantity: quantity - 1,
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedQuantity = parseInt(e.target.value);
    if (!isNaN(parsedQuantity)) {
      setQuantity(parsedQuantity);
      if (onChangeQuantity) {
        onChangeQuantity(parsedQuantity);
      }
    }
  };

  const decrementButtonStyle = {
    backgroundColor: quantity <= 0 ? '#BFBFBF' : '#1F307C',
    color: quantity <= 0 ? '#777676' : 'white',
    cursor: quantity <= 0 ? 'not-allowed' : 'pointer',
  };

  const incrementButtonStyle = {
    backgroundColor: quantity >= stock ? '#BFBFBF' : '#1F307C',
    color: quantity >= stock ? '#777676' : 'white',
    cursor: quantity >= stock ? 'not-allowed' : 'pointer',
  };

  return (
    <div className="flex border border-[#EEEDF0] rounded-xl p-2 mt-3">
      {/* Left */}
      <div className="w-1/2 flex flex-col">
        <div className="flex items-center gap-1 h-5">
          <Image
            src="/img/dummy-startup-logo.png"
            alt="Logo"
            height={20}
            width={20}
          />
          <p className="text-sm">{startup}</p>
        </div>
        <p>{name}</p>
        <div className="flex items-center gap-1">
          <Image
            src="/img/green-diamond.svg"
            alt="Price"
            width={12}
            height={18}
          />
          <p className="font-bold text-lg">{price}</p>
        </div>
        <p className="text-[#9B9B9B] mt-auto">Sisa: {stock - quantity}</p>
      </div>
      {/* Right */}
      <div className="w-1/2 flex flex-col items-end gap-3">
        <Image
          src="/img/test-merch-image.png"
          alt="Merch"
          height={76}
          width={76}
        />
        {enableQuantityInput ? (
          <div className="mt-4 flex items-center">
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2"
              style={decrementButtonStyle}
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              className="no-arrow bg-gray-200 text-gray-700 px-4 py-2 w-10 focus:outline-none"
              type="number"
              value={quantity}
              onChange={handleChange}
              readOnly
            />
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2"
              style={incrementButtonStyle}
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CatalogueItem;
