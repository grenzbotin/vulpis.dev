import React from 'react';
import T from 'prop-types';
import { Text, Box, Flex } from 'theme-ui';
import { Link } from 'react-router-dom';

import Button from './elements/Button';
import linkedin from './assets/linkedin.svg';
import xing from './assets/xing.svg';
import PageLabel from './elements/PageLabel';
import { withTranslation } from 'react-i18next';


function Footer({ t }) {
  return (
   <>
   <Box
      sx={{
        display: 'flex',
        height: '10vh',
        '& > #footerbg': {
          width: '100%',
          zIndex: -2,
        }
      }}
    >
    <svg id="footerbg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <title>3 triangles in the background</title>
      <polygon fill="var(--theme-ui-colors-primary)" points="5,10 0,101 25,101" />
      <polygon fill="var(--theme-ui-colors-secondary)" points="10,101 20,40 40,101" />
      <polygon fill="var(--theme-ui-colors-primary)" points="30,101 50,60 60,101" />
    </svg>
    </Box>
    <Flex
      as="footer"
      title="Footer"
      color='navbarText'
      bg='#20232a'
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0px -1px 0px 0px rgba(0,0,0,0.2)',
        zIndex: 2,
        flexWrap: 'wrap',
      }}
      px={[4, 4, 5, 5]}
      py={3}
    >
      <Box py={2} sx={{ alignItems: 'center', display: 'flex' }}><PageLabel /></Box>
      <Box py={2} sx={{ alignItems: 'center', display: 'flex' }}>
          <Button
            href="https://www.xing.com/profile/Franziska_Fieke"
            target="_blank"
            rel="noreferrer">
            <img alt="Xing Franziska Fieke" src={xing} style={{ width: '1rem', height: '1rem' }} />
          </Button>
          <Button
            href="https://de.linkedin.com/in/franziska-fieke-809882114"
            target="_blank"
            rel="noreferrer"
            mL>
            <img alt="LinkedIn Franziska Fieke" src={linkedin} style={{ width: '1rem', height: '1rem' }} />
          </Button>
          <Text
            title="Legal documents"
            sx={{
              fontSize: '.8rem',
              lineHeight: '1.5rem',
              '& > a': {
                color: 'inherit',
                textDecoration: 'none',
                padding: '1rem',
                '&:hover': {
                  color: 'secondary',
                }
              }
            }}
          >
            <span style={{ color: '#65a88b', marginLeft: '1rem' }}>&#9652;</span>
            <Link to="/disclosure">{t('footer.legal_disclosure')}</Link><br />
            <span style={{ color: '#65a88b', marginLeft: '1rem' }}>&#9652;</span>
            <Link to="/privacy">{t('footer.privacy')}</Link>
          </Text>
      </Box>
    </Flex>
    </>
  );
}

Footer.propTypes = {
  t: T.func.isRequired,
}

export default withTranslation()(Footer);
