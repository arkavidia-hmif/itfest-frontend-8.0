import React from 'react';
import EnterPinField from '@/components/EnterPin';

//assets imports
interface EnterPinProps {}

const EnterPin: React.FC<EnterPinProps> = () => {
  return (
    <>
        <div className="self-center">
          <EnterPinField />
        </div>
    </>
  );
};

export default EnterPin;
