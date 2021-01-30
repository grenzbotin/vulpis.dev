import React, { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useThemeUI } from 'theme-ui';
import Image from 'next/image';

import Button from './Button';

const MODE_ICONS : {[key: string]: string } = {
	light: "/images/sun.svg",
	dark: "/images/moon.svg",
};

const DayNightToggle: React.FC = () => {
	const { t } = useTranslation('common');
	const { colorMode, setColorMode } = useThemeUI();
	const [currentMode, setCurrentMode] = useState('light');

	useEffect(() => {
		if (colorMode === 'default' || colorMode === 'light') {
			setCurrentMode('light');
		} else {
			setCurrentMode('dark');
		}
	}, [colorMode])

	return (
		<Button
			aria-label={t(`navbar.switch_theme_${currentMode}`)}
			data-testid="theme_switch"
			onClick={() => setColorMode(currentMode === 'light' ? 'dark' : 'light')}
			mL
		>
			<Image
				alt={t(`navbar.switch_theme_${currentMode}`)}
				src={MODE_ICONS[currentMode]}
				width={16}
				height={16}
			/>
		</Button>
	);
}

export default DayNightToggle;
