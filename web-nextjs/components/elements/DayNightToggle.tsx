import React, { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useThemeUI } from 'theme-ui';

import Button from './Button';
import CustomIcon from './CustomIcon';

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
  }, [colorMode]);

  return (
    <Button
      aria-label={t(`navbar.switch_theme_${currentMode}`)}
      title={t(`navbar.switch_theme_${currentMode}`)}
      data-testid="theme_switch"
      onClick={() => setColorMode(currentMode === 'light' ? 'dark' : 'light')}
      mL
    >
      <CustomIcon
        alt={t(`navbar.switch_theme_${currentMode}`)}
        name={currentMode === 'light' ? 'sun' : 'moon'}
        width={16}
        height={16}
      />
    </Button>
  );
};

export default DayNightToggle;
