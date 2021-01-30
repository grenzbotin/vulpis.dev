import React, { useEffect } from 'react';
import { useThemeUI } from 'theme-ui';
import dynamic from 'next/dynamic';

import { getTimeBasedTheme } from './helpers';

const Navbar = dynamic(() => import('./Navbar'));
const Footer = dynamic(() => import('./Footer'));

interface Props {
	isNavSticky: boolean,
	children: React.ReactNode,
}

const Layout: React.FC<Props> = ({ isNavSticky, children }) => {
	const { colorMode, setColorMode } = useThemeUI();

	useEffect(() => {
		const wantedColorMode = getTimeBasedTheme(new Date().getHours());
		if (wantedColorMode !== colorMode) {
			setColorMode(wantedColorMode);
		}
			setColorMode(wantedColorMode);
	//eslint-disable-next-line
	}, []);

	return (
		<>
			<Navbar sticky={isNavSticky} />
			{children}
			<Footer />
		</>
	);
}

export default Layout;