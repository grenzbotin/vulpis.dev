import React from 'react';
import T from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { withTranslation } from 'react-i18next';

function MetaTags({ t, i18n }) {
  return (
    <Helmet>
      <html lang={i18n.language || 'en' } />
      <title>{t('meta.title')}</title>
      <meta name="description" content={t('meta.description')} />
      <meta name="keywords" content={t('meta.keywords')} />
      <link rel="canonical" href="https://vulpis.dev" />
    </Helmet>
  );
}

MetaTags.propTypes = {
  t: T.func,
  i18n: T.shape({ language: T.string }),
}

export default withTranslation()(MetaTags);
