import React from 'react';

interface CheckboxProps {
    value: string,
    checked?: boolean,
    onChange?: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({
    value,
    checked,
    onChange
}) => {

    return (
        <>
            <div className='flex font-helvetica text-xs items-center mb-2'>
                <input
                    type="checkbox"
                    id={value}
                    name={value}
                    checked={checked}
                    onChange={onChange}
                    className='mr-1 accent-[#FEB20E]' />
                <label htmlFor={value}>{value}</label>
            </div>
        </>
    );
};

export default Checkbox;
