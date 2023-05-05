import React from 'react';

const ToggleButton: React.FC<{
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => {
  return (
    <button
      type="button"
      className={`${
        active
          ? `from-[#f3c301] to-[#fee3a2] shadow-xl shadow-[#cead6d] text-[#65483d]`
          : `from-white opacity-50 hover:from-[#F3C301] hover:to-[#FEE3A2] hover:shadow-xl hover:shadow-[#9E8279] hover:text-[#65483D]`
      } bg-gradient-to-b w-[10vh] h-[10vh] rounded-md transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
