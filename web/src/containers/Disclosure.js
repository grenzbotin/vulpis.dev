import React from 'react';
import T from 'prop-types';
import { Box, Text, Link } from 'theme-ui';
import Obfuscate from 'react-obfuscate';
import { withTranslation } from 'react-i18next';

import night from '../components/assets/moon.svg';
import day from '../components/assets/sun.svg';
import { H3, H2 } from '../components/elements/Typography';


function Disclosure({ i18n, t }) {
  const isGerman = i18n.language === 'de';

  return (
    <Box sx={{ maxWidth: '1500px', mx: 'auto', padding: '5rem 0 2rem 0' }}>
      <Box px={[4, 5, 6]} mb={5} mt={5}>
      {!isGerman && (
        <Box pb={3}><Text>Please note: This page is only available in German since it is legally required in German-language nations.</Text></Box>
      )}
        <H2>Impressum</H2>
        <H3>Angaben gemäß § 5 TMG</H3>
        <Text>
          vulpis web development Franziska Fieke<br />
          {window.configuration.CONTACT_ADDRESS_1} <br />
          {window.configuration.CONTACT_ADDRESS_2}
        </Text>
        <H3>Kontakt</H3>
        <Text
          sx={{
            '& > a': {
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {
                color: 'secondary',
              }
            }
          }}
        >
          E-Mail: <Obfuscate email={`${window.configuration.MAIL_ADDRESS}`} headers={{ subject: t('disclosure.email_subject') }} /><br />
          Telefon: <Obfuscate tel={`${window.configuration.CONTACT_PHONE}`} />
        </Text>
        <H3>Umsatzsteuer-ID</H3>
        <Text>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          {window.configuration.USTID}
        </Text>
        <H3>Haftungsausschluss</H3>
        <Text>
          Die Seite enthält Link zu Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch
          keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
          der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
        </Text>
        <H3>Verbraucherstreitbeilegung / Universalschlichtungsstelle</H3>
        <Text>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</Text>
        <H3>Credits</H3>
        <Text>
          <img alt="sun icon" src={day} style={{ width: '1rem', height: '1rem', marginRight: '.5rem' }} />+
          <img alt="moon icon" src={night} style={{ width: '1rem', height: '1rem', margin: '0 .5rem' }} /> {t('disclosure.credits_made_by')}: <Link href="https://www.flaticon.com/authors/freepik" target="_blank" title="Icon credits: flaticon - Freepik" rel="noreferrer">Freepik</Link></Text>
      </Box>
    </Box>
  );
}

Disclosure.propTypes = {
  i18n: T.shape({ language: T.string, changeLanguage: T.func }).isRequired,
  t: T.func.isRequired,
}


export default withTranslation()(Disclosure);
