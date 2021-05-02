import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import { Link as NextLink } from './NextLink';
import Button from './Button';
import CustomIcon from './CustomIcon';

const LanguageToggle: React.FC = () => {
  const { pathname, query } = useRouter();
  const { t, lang } = useTranslation('common');
  const isGerman = lang === 'de';
  const switchTo = isGerman ? 'en' : 'de';

  return (
    <NextLink
      href={{
        pathname,
        query
      }}
      locale={switchTo}
      key={switchTo}
    >
      <Button title={t('navbar.switch_language')} aria-label={t('navbar.switch_language')}>
        <CustomIcon alt={t('navbar.switch_language')} name={lang} width={16} height={8} />
      </Button>
    </NextLink>
  );
};

export default LanguageToggle;
