/* eslint-disable max-len */
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Box, Container, Text, Link, Paragraph } from 'theme-ui';
import dynamic from 'next/dynamic';
import Obfuscate from 'react-obfuscate';
import { GetStaticProps } from 'next';

import { H1, H3 } from '../components/elements/Typography';
import { secrets } from '../lib/utils';
import CustomIcon from '../components/elements/CustomIcon';

const HtmlHeader = dynamic(() => import('../components/elements/HtmlHeader'));

// TO BE CLEANED WITH NEXT UPDATE
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

const Disclosure: React.FC = () => {
  const { t, lang } = useTranslation('disclosure');
  const isGerman = lang === 'de';

  return (
    <>
      <HtmlHeader
        title={t('meta.title')}
        description={t('meta.description')}
        keywords={t('meta.keywords')}
        noRobots
      />
      <Container
        title="Disclosure"
        sx={{ maxWidth: '1450px', mx: 'auto', padding: '5rem 0 2rem 0' }}
      >
        <main>
          <Box px={[4, 5, 6]} mb={5} mt={5}>
            {!isGerman && (
              <Box pb={3}>
                <Text>
                  Please note: This page is only available in German since it is legally required in
                  German-language nations.
                </Text>
              </Box>
            )}
            <H1 highlight>Impressum</H1>
            <H3>Angaben gemäß § 5 TMG</H3>
            <Text>
              vulpis web development Franziska Fieke
              <br />
              {secrets.CONTACT_ADDRESS_1.replace('_', ' ')} <br />
              {secrets.CONTACT_ADDRESS_2.replace('_', ' ')}
            </Text>
            <H3>Kontakt</H3>
            <Text
              sx={{
                '& > a': {
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'secondary'
                  }
                }
              }}
            >
              E-Mail:{' '}
              <Obfuscate
                email={`${secrets.MAIL_ADDRESS}`}
                headers={{ subject: t('email_subject') }}
              />
              <br />
              Telefon: <Obfuscate tel={`${secrets.CONTACT_PHONE}`} />
            </Text>
            <H3>Umsatzsteuer-ID</H3>
            <Text>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              {secrets.USTID}
            </Text>
            <H3>Haftungsausschluss</H3>
            <Text>
              Die Seite enthält Link zu Webseiten Dritter, auf deren Inhalte ich keinen Einfluss
              habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
              Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
              Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
            </Text>
            <H3>Verbraucherstreitbeilegung / Universalschlichtungsstelle</H3>
            <Text>
              Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </Text>
            <H3>Credits</H3>
            <Paragraph>
              <CustomIcon alt="sun icon" name="sun" width={16} height={16} />
              &nbsp;+&nbsp;
              <CustomIcon alt="moon icon" name="moon" width={16} height={16} /> &nbsp;+&nbsp;
              <CustomIcon alt="internet icon" name="internet" width={16} height={16} /> &nbsp;
              {t('credits_made_by')}:&nbsp;
              <Link
                href="https://www.flaticon.com/authors/freepik"
                target="_blank"
                title="Icon credits: flaticon - Freepik"
                rel="noreferrer"
              >
                Freepik
              </Link>
            </Paragraph>
            <Paragraph>
              <CustomIcon alt="code icon" name="code" width={16} height={16} /> &nbsp;
              {t('credit_made_by')}:&nbsp;
              <Link
                href="https://www.flaticon.com/authors/pixel-perfect"
                target="_blank"
                title="Icon credits: flaticon - Pixel perfect"
                rel="noreferrer"
              >
                Pixel perfect
              </Link>
            </Paragraph>
          </Box>
        </main>
      </Container>
    </>
  );
};

export default Disclosure;
