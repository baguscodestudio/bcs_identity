import React from 'react';
import { useColor } from '../providers/ColorProvider';

const ToggleButton: React.FC<{
	active: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
}> = ({ active, onClick, children }) => {
	const { color } = useColor();
	return (
		<button
			type="button"
			className={`${
				active
					? `${color.gradient} shadow-xl ${color.shadow} text-[#65483d]`
					: `from-white opacity-50 ${color.hover} hover:shadow-xl hover:shadow-[#9E8279] hover:text-[#65483D]`
			} bg-gradient-to-b w-[10vh] h-[10vh] rounded-md transition-colors`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default ToggleButton;
