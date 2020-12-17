import { React } from 'react';
import T from 'prop-types';
import { withTranslation } from 'react-i18next';

import Button from './Button';
import deFlag from '../assets/de.svg';
import enFlag from '../assets/en.svg';

function LanguageToggle({ i18n, t }) {
  const isGerman = i18n.language === 'de';

  return (
    <Button aria-label={t('navbar.switch_language')} onClick={() => i18n.changeLanguage(isGerman ? 'en' : 'de' )}>
      <img
        alt={t('navbar.switch_language')}
        src={isGerman ? deFlag : enFlag}
        style={{ width: '1rem', height: '0.5rem' }}
      />
    </Button>
  );
}

LanguageToggle.propTypes = {
    t: T.func.isRequired,
    i18n: T.shape({ language: T.string, changeLanguage: T.func }).isRequired,
}

export default withTranslation()(LanguageToggle);
