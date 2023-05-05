import React from 'react';
import checklist from '../img/checklist.png';
import cross from '../img/cross.png';

const InputLabel: React.FC<{
  className?: string;
  pattern?: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  label: string;
  name: string;
}> = ({ className, label, name, pattern, type, onChange, value }) => {
  return (
    <div className={`${className} relative w-full h-[6vh]`}>
      <div className="w-full h-full bg-gradient-to-r from-white rounded-sm opacity-40 absolute -z-10">
        &nbsp;
      </div>
      <label className="bg-gradient-radial from-[#F3C301] to-[#FDBF6E] w-32 text-center rounded-sm py-1 absolute -top-4 left-4">
        {label}
      </label>
      <input
        type={type}
        pattern={pattern}
        value={value}
        name={name}
        onChange={onChange}
        required
        className="peer invalid:outline-red-400 invalid:outline-2 w-full h-full text-gray-300 bg-transparent outline-none px-8 py-2 text-xl focus:outline-neutral-200 rounded-sm"
      />
      <img
        src={checklist}
        className="peer-invalid:invisible w-16 h-16 absolute right-4 top-1/2 -translate-y-1/2"
      />
      <img
        src={cross}
        className="hidden peer-invalid:block w-16 h-16 absolute right-4 top-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default InputLabel;
