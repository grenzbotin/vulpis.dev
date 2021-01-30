import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Link as NextLink } from './NextLink';
import Button from './Button';

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
      <Button aria-label={t('navbar.switch_language')}>
        <Image
          alt={t('navbar.switch_language')}
          src={isGerman ? '/images/de.svg' : '/images/en.svg'}
          width={16}
          height={8}
        />
      </Button>
    </NextLink>
  );
};

export default LanguageToggle;
