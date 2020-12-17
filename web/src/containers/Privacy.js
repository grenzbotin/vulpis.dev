import React from 'react';
import T from 'prop-types';
import { Box, Text, Link } from 'theme-ui';
import { withTranslation } from 'react-i18next';

import { H3, H2 } from '../components/elements/Typography';

function Privacy({ t }) {
  return (
    <Box sx={{ maxWidth: '1500px', mx: 'auto', padding: '5rem 0 2rem 0' }}>
      <Box px={[4, 5, 6]} mb={5} mt={5}>
        <H2>{t('privacy.title')}</H2>
        <Text>
          {t('privacy.intro')}<br />
          {t('privacy.accepting')}
        </Text>
        <H3>{t('privacy.section_1.title')}</H3>
        <Text>
          <p>{t('privacy.section_1.text')}</p>
        </Text>
        <H3>{t('privacy.section_2.title')}</H3>
        <Text>
          {t('privacy.section_2.text_1')}<br/>
          {t('privacy.section_2.text_2')}<br/>
          {t('privacy.section_2.text_3')} <Link href="https://www.digitalocean.com/legal/data-processing-agreement/" target="_blank" rel="noreferrer">{t('privacy.section_2.text_link')}</Link> {t('privacy.section_2.text_4')}
        </Text>
        <H3>{t('privacy.section_3.title')}</H3>
        <Text>
          <p>{t('privacy.section_3.text_1')}</p>
          <p>{t('privacy.section_3.text_2')}</p>
        </Text>
        <H3>{t('privacy.section_4.title')}</H3>
        <Text>{t('privacy.section_4.text')}</Text>
        <H3>{t('privacy.section_5.title')}</H3>
        <Text>{t('privacy.section_5.text')}</Text>
        <H3>{t('privacy.section_6.title')}</H3>
        <Text>{t('privacy.section_6.text')}</Text>            
        <H3>{t('privacy.section_7.title')}</H3>
        <Text>
          {t('privacy.section_7.text_1')}<br/>
          {t('privacy.section_7.text_2')}<br/>
          {t('privacy.section_7.text_3')} <Link href="https://www.namecheap.com/legal/universal/data-processing-addendum/" target="_blank" rel="noreferrer">{t('privacy.section_7.text_link')}</Link> {t('privacy.section_2.text_4')}<br/>
        </Text>
        <H3>{t('privacy.section_8.title')}</H3>
        <Text>{t('privacy.section_8.text')}</Text>
        <H3>{t('privacy.section_9.title')}</H3>
        <Text>{t('privacy.section_9.text')}</Text>
      </Box>
    </Box>
  );
}

Privacy.propTypes = {
  t: T.func.isRequired,
}

export default withTranslation()(Privacy);
