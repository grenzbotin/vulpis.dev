import React from 'react';
import T from 'prop-types';
import { withTranslation } from 'react-i18next';
import { useThemeUI } from 'theme-ui';

import night from '../assets/moon.svg';
import day from '../assets/sun.svg';
import Button from './Button';
import { getSetThemeMode } from '../../helpers';

const MODE_ICONS = {
  light: day,
  dark: night,
};

function DayNightToggle({ t }) {
  const { theme: { colors: { modes } }, colorMode, setColorMode } = useThemeUI();
  const isDefault = colorMode === 'default';

  const otherMode = getSetThemeMode(modes);
  const defaultMode = (otherMode === 'dark') ? 'light' : 'dark';
  const currentMode = isDefault ? defaultMode : otherMode;

  return (
    <Button aria-label={t(`navbar.switch_theme_${currentMode}`)} data-testid="theme_switch" onClick={() => setColorMode(isDefault ? otherMode : 'default' )} mL>
      <img
        alt={t(`navbar.switch_theme_${currentMode}`)}
        src={MODE_ICONS[currentMode]}
        style={{ width: '1rem', height: '1rem' }}
      />
    </Button>
  );
}

DayNightToggle.propTypes = {
  t: T.func.isRequired,
}


export default withTranslation()(DayNightToggle);
