export interface ColorThemeProps {
	[key: string]: ColorProps;
}

export interface ColorProps {
	gradient: string;
	text: string;
	textGradient: string;
	shadow: string;
	hover: string;
}

export interface ConfigProps {
	server_name: string;
	color: string;
	locale: { [key: string]: string };
}
