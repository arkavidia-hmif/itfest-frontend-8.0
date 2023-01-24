import React from 'react';

const LogoutButton = () => {
  return (
    <div className="flex w-full p-4">
      <button
        className="text-white bg-[#F43518] rounded-md w-full font-helvetica font-bold 
            text-xs py-4 px-[7.5rem]"
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;