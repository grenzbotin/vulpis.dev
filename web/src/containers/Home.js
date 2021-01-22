import React, { lazy, Suspense } from 'react';
import { Box, Grid, Text } from 'theme-ui';
import T from 'prop-types';
import { withTranslation } from 'react-i18next';

import { H2, H3 } from '../components/elements/Typography';
import profile from '../components/assets/profile_2_sq.jpg';
import BadgeFlag from '../components/elements/BadgeFlag';

const Heading = lazy(() => import('../components/Heading'));
const List = lazy(() => import('../components/elements/List'));
const Image = lazy(() => import('../components/elements/Image'));
const Contact = lazy(() => import('../components/Contact'));

function Home({ headerElement, t }) {
  return (
    <Box title="Home content" sx={{ maxWidth: '1500px', mx: 'auto', padding: '5rem 0 2rem 0' }}>
      <Suspense fallback={<div>..</div>}>
        <Heading element={headerElement} />
      </Suspense>
      <Box title={t('home.coding.title')} px={[4, 5, 6]} mb={5}>
        <H2>{t('home.coding.title')}</H2>
        <Text>
          <p>{t('home.coding.text_1')}</p>
            <Image alt="Franziska Fieke" src={profile} rounded height={200} width={200} />
          <p>{t('home.coding.text_2')}</p>
          <p>{t('home.coding.text_3')}<br />
            {t('home.coding.text_4')} <i>{t('home.coding.text_5')}</i> {t('home.coding.text_6')}
          </p>
          <p style={{ marginTop: '2rem' }}>{t('home.coding.text_7')}</p>
        </Text>
      </Box>
      <Grid gap={[4, 5, 6]} mb={5} px={[4, 5, 6]} columns={[1, 1, 1, 2]}>
        <Box title={t('home.stack.title')}>
          <H2>{t('home.stack.title')}</H2>
          <Text>{t('home.stack.text')}</Text>
          <Box title={t('home.experience.private.title')}>
            <Suspense fallback={<div>..</div>}>
              <List listElements={Array(11).fill().map((_, i) => ({ text: `home.stack.list_${i + 1}` }))} />
            </Suspense>
          </Box>
        </Box>
        <Box title={t('home.offer.title')}>
          <H2>{t('home.offer.title')}</H2>
          <H3>{t('home.offer.subtitle_1')}</H3>
          <Text>{t('home.offer.text_1')}</Text>
          <H3>{t('home.offer.subtitle_2')}</H3>
          <Text>{t('home.offer.text_2')}</Text>
          <H3>{t('home.offer.subtitle_3')}</H3>
          <Text>{t('home.offer.text_3')}</Text>
        </Box>
      </Grid>
      <Box title={t('home.experience.title')} px={[4, 5, 6]} mb={5}>
        <H2>{t('home.experience.title')}</H2>
        <Text>
          {t('home.experience.text_1')}<br />
          {t('home.experience.text_2')}
        </Text>
        <Grid gap={[4, 5, 6]} mt={3} columns={[1, 1, 1, 2]}>
          <Box title={t('home.experience.work.title')}>
            <H3>{t('home.experience.work.title')}</H3>
            <Suspense fallback={<div>..</div>}>
              <List
                listElements={[
                  { text: t('home.experience.work.list_1'), badges: ['FE', 'BE'] },
                  { text: t('home.experience.work.list_2'), badges: ['FE'] },
                  { text: t('home.experience.work.list_3'), badges: ['FE'] },
                  { text: t('home.experience.work.list_4'), badges: ['FE'] },
                  { text: t('home.experience.work.list_5'), badges: ['FE'] }
                ]}
              />
            </Suspense>
          </Box>
          <Box title={t('home.experience.private.title')}>
            <H3>{t('home.experience.private.title')}</H3>
            <Suspense fallback={<div>..</div>}>
              <List
                listElements={[
                  { text: t('home.experience.private.list_1'), badges: ['FE', 'BE'] },
                  { text: t('home.experience.private.list_2'), badges: ['EE'] },
                  { text: t('home.experience.private.list_3'), badges: ['BE'] },
                ]}
              />
            </Suspense>
          </Box>
        </Grid>
        <Box mt={2} sx={{ textAlign: 'right', fontSize: 1 }} title={t('home.experience.legend.title')}>
          <BadgeFlag variant="secondary" mr={'0.5rem'} label="FE" />Frontend <br />
          <BadgeFlag variant="primary" mr={'0.5rem'} label="BE" />Backend <br />
          <BadgeFlag variant="tertiary" mr={'0.5rem'} label="EE" />{t('home.experience.legend.EE')}
        </Box>
      </Box>
      <Box px={[4, 5, 6]} mb={5}>
        <H2>{t('home.contact.title')}</H2>
        <Suspense fallback={<div>..</div>}>
          <Contact />
        </Suspense>
      </Box>
    </Box>
  );
}

Home.propTypes = {
  headerElement: T.shape({}).isRequired,
  t: T.func.isRequired,
}

export default withTranslation()(Home);
