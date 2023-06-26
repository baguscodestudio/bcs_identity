import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import App from './App';
import './index.css';
import { ColorProvider } from './providers/ColorProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<VisibilityProvider>
			<ColorProvider>
				<App />
			</ColorProvider>
		</VisibilityProvider>
	</React.StrictMode>
);
