'use client';

import React, { useEffect } from 'react';
import { usePinInput } from 'react-pin-input-hook';

interface EnterPinFieldProps {
  dummyProp?: any;
}

const EnterPinField: React.FC<EnterPinFieldProps> = ({ dummyProp }) => {
  const [values, setValues] = React.useState(['', '', '', '', '', '']);
  const [error, setError] = React.useState(false);
  const actionRef = React.useRef<PinInputActions>(null);
  const { fields } = usePinInput({
    values,
    onChange: setValues,
    error,
    actionRef,
  });

  const onSubmit = () => {
    // Check if there is at least one empty field. If there is,
    // the input is considered empty.
    if (values.includes('')) {
      // Setting the error.
      setError(true);
      // We set the focus on the first empty field if `error: true`
      // was passed as a parameter in `options`.
      actionRef.current?.focus();
    }
  };

  const numOfFields = 6;

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split('-');

    // Check if they hit the max character length
    if (value.length >= maxLength) {
      // Check if it's not the last input field
      if (parseInt(fieldIndex, 10) < 6) {
        // Get the next input field
        const nextSibling = document.querySelector(
          `input[name=field-${parseInt(fieldIndex, 10) + 1}]`
        );

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="font-helvetica text-[12px] text-[#535252] font-[400] mt-4 ml-1 mb-1">
          Masukkan pin visitor
        </div>
        <div>
          <form className="relative">
            <div className="pin-input">
              {fields.map((fieldProps, index) => (
                // <input key={index} className="pin-input__field" {...fieldProps} />
                <input
                  maxLength={1}
                  key={index}
                  type="number"
                  className="p-3 border border-gray-300 rounded-md w-[48px] h-[80px] mx-[4px] placeholder-slate-400 text-[36px] font-[900] font-archivo"
                  name={`field-${index}`}
                  onChange={handleChange}
                />
              ))}
            </div>

            <button
              className="fixed bottom-[16px] font-helvetica font-bold text-[12px] rounded-xl bg-[#1F307C] text-[#FFFFFF] w-[328px] h-[40px]"
              onClick={onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnterPinField;
