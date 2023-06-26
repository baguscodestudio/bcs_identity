import React, { Context, createContext, useContext, useState } from 'react';
import { ColorProps, ColorThemeProps } from '../types';

const ColorCtx = createContext<ColorProviderValue | null>(null);

interface ColorProviderValue {
	setColor: (color: ColorProps) => void;
	color: ColorProps;
}

export const COLOR_TEMPLATES: ColorThemeProps = {
	['red']: {
		gradient: 'from-red-400 to-red-600',
		text: 'text-red-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-red-500',
		hover: 'hover:from-red-400 hover:to-red-600',
	},
	['amber']: {
		gradient: 'from-amber-400 to-amber-600',
		text: 'text-amber-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-amber-500',
		hover: 'hover:from-amber-400 hover:to-amber-600',
	},
	['yellow']: {
		gradient: 'from-yellow-400 to-yellow-600',
		text: 'text-yellow-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-yellow-500',
		hover: 'hover:from-yellow-400 hover:to-yellow-600',
	},
	['orange']: {
		gradient: 'from-orange-400 to-orange-600',
		text: 'text-orange-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-orange-500',
		hover: 'hover:from-orange-400 hover:to-orange-600',
	},
	['emerald']: {
		gradient: 'from-emerald-400 to-emerald-600',
		text: 'text-emerald-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-emerald-500',
		hover: 'hover:from-emerald-400 hover:to-emerald-600',
	},
	['lime']: {
		gradient: 'from-lime-400 to-lime-600',
		text: 'text-lime-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-lime-500',
		hover: 'hover:from-lime-400 hover:to-lime-600',
	},
	['green']: {
		gradient: 'from-green-400 to-green-600',
		text: 'text-green-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-green-500',
		hover: 'hover:from-green-400 hover:to-green-600',
	},
	['teal']: {
		gradient: 'from-teal-400 to-teal-600',
		text: 'text-teal-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-teal-500',
		hover: 'hover:from-teal-400 hover:to-teal-600',
	},
	['cyan']: {
		gradient: 'from-cyan-400 to-cyan-600',
		text: 'text-cyan-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-cyan-500',
		hover: 'hover:from-cyan-400 hover:to-cyan-600',
	},
	['blue']: {
		gradient: 'from-blue-400 to-blue-600',
		text: 'text-blue-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-blue-500',
		hover: 'hover:from-blue-400 hover:to-blue-600',
	},
	['indigo']: {
		gradient: 'from-indigo-400 to-indigo-600',
		text: 'text-indigo-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-indigo-500',
		hover: 'hover:from-indigo-400 hover:to-indigo-600',
	},
	['fushcia']: {
		gradient: 'from-fushcia-400 to-fushcia-600',
		text: 'text-fushcia-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-fushcia-500',
		hover: 'hover:from-fushcia-400 hover:to-fushcia-600',
	},
	['pink']: {
		gradient: 'from-pink-400 to-pink-600',
		text: 'text-pink-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-pink-500',
		hover: 'hover:from-pink-400 hover:to-pink-600',
	},
	['rose']: {
		gradient: 'from-rose-400 to-rose-600',
		text: 'text-rose-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-rose-500',
		hover: 'hover:from-rose-400 hover:to-rose-600',
	},
	['sky']: {
		gradient: 'from-sky-400 to-sky-600',
		text: 'text-sky-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-sky-500',
		hover: 'hover:from-sky-400 hover:to-sky-600',
	},
	['violet']: {
		gradient: 'from-violet-400 to-violet-600',
		text: 'text-violet-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-violet-500',
		hover: 'hover:from-violet-400 hover:to-violet-600',
	},
	['purple']: {
		gradient: 'from-purple-400 to-purple-600',
		text: 'text-purple-600',
		textGradient: 'from-stone-400 to-stone-600',
		shadow: 'shadow-purple-500',
		hover: 'hover:from-purple-400 hover:to-purple-600',
	},
};

// This should be mounted at the top level of your application, it is currently set to
// apply a CSS visibility value. If this is non-performant, this should be customized.
export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [color, setColor] = useState(COLOR_TEMPLATES['teal']);

	return (
		<ColorCtx.Provider
			value={{
				color,
				setColor,
			}}
		>
			{children}
		</ColorCtx.Provider>
	);
};

export const useColor = () =>
	useContext<ColorProviderValue>(ColorCtx as Context<ColorProviderValue>);
