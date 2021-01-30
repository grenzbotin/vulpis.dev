import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useThemeUI } from 'theme-ui';

import { Logo } from './Logo';

const LogoSwap: React.FC = () => {
	const { t } = useTranslation('common');
	const [animation, setAnimation] = useState(false);
	const { colorMode, setColorMode } = useThemeUI();
	const isLight = (colorMode === 'default' || colorMode === 'light');

	const handleClick = (): void => {
		setAnimation(true);
		setColorMode(isLight ? 'dark'  : 'light');
		setTimeout(() => {
			setAnimation(false);
		}, 1000);
	};

	const handleKeyDown = (evt: React.KeyboardEvent): void => {
		if (evt.key !== "Tab") {
			handleClick();
		}
	}

	return (
		<Logo
			alt={t('heading.logo')}
			title="Header logo"
			data-testid="logo_theme_switch"
			width={200}
			height={200}
			style={{
				width: '200px',
				height: '200px',
				borderStyle: 'solid',
				borderColor: '#65a88b', 
				borderRadius: 100,
				backgroundColor: '#65a88b',
				cursor: 'pointer',
				outline: 0,
				zIndex: 1,
			}}
			tabIndex={0}
			animate={animation ? 1 : 0}
			animationtype="forwards"
			onClick={handleClick}
			onKeyDown={handleKeyDown}
		/>
	);
}

export default LogoSwap;
