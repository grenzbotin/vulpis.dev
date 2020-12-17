import React, { useState } from 'react';
import T from 'prop-types';
import { withTranslation } from 'react-i18next';
import { useThemeUI } from 'theme-ui';

import { getSetThemeMode } from '../../helpers';
import { Logo } from './Logo';


function LogoSwap({ t }) {
  const [animation, setAnimation] = useState(false);
  const { theme: { colors: { modes } }, colorMode, setColorMode } = useThemeUI();

  const handleClick = () => {
    setAnimation(true);
    setColorMode(colorMode === 'default' ? getSetThemeMode(modes) : 'default');
    setTimeout(() => {
      setAnimation(false);
    }, 1000);
  };

  return (
    <Logo
      alt={t('heading.logo')}
      title="Header logo"
      data-testid="logo_theme_switch"
      style={{
        width: '200px',
        height: '200px',
        borderStyle: 'solid',
        borderColor: '#65a88b', 
        borderRadius: 100,
        backgroundColor: '#65a88b',
        cursor: 'pointer',
        zIndex: 1,
      }}
      tabIndex={0}
      animate={animation ? 1 : 0}
      animationtype="forwards"
      as="button"
      onClick={handleClick}
      onKeyDown={handleClick}
    />
  );
}

LogoSwap.propTypes = {
  t: T.func.isRequired,
}

export default withTranslation()(LogoSwap);
