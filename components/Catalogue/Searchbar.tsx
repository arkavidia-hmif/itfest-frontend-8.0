import Image from 'next/image';
import React from 'react';

interface SearchbarProps {
  placeholder?: string;
  className?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ placeholder, className }) => {
  return (
    <div
      className={`relative flex items-center border border-[#BFBFBF] rounded-lg w-full ${className}`}
    >
      <div className="absolute left-0 pl-3 pr-3">
        <Image src="/icons/search.svg" alt="Search" height={16} width={16} />
      </div>
      <input
        className="pl-10 pr-4 py-2 w-full focus:outline-none focus:shadow-outline rounded-lg"
        type="text"
        placeholder={placeholder || ''}
      />
    </div>
  );
};

export default Searchbar;
