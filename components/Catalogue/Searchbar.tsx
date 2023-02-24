'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface SearchbarProps {
  placeholder?: string;
  className?: string;
  data?: any;
  // eslint-disable-next-line no-unused-vars
  onFilter: (data: any) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  placeholder,
  className,
  data,
  onFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const filteredItems = data.filter(
      (data: any) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.startup.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    onFilter(filteredItems);
  }, [searchQuery]);

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
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder={placeholder || ''}
      />
    </div>
  );
};

export default Searchbar;
