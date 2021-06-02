import React from 'react';
import { Text, Box, Flex } from 'theme-ui';
import Link from 'next/link';

import Button from './elements/Button';
import PageLabel from './elements/PageLabel';
import useTranslation from 'next-translate/useTranslation';
import CustomIcon from './elements/CustomIcon';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          height: '10vh',
          '& > #footerbg': {
            width: '100%',
            zIndex: -2
          }
        }}
      >
        <svg
          id="footerbg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <title>3 triangles in the background</title>
          <polygon fill="var(--theme-ui-colors-primary)" points="5,10 0,101 25,101" />
          <polygon fill="var(--theme-ui-colors-secondary)" points="10,101 20,40 40,101" />
          <polygon fill="var(--theme-ui-colors-primary)" points="30,101 50,60 60,101" />
        </svg>
      </Box>
      <Flex
        as="footer"
        title="Footer"
        color="navbarText"
        bg="#20232a"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0px -1px 0px 0px rgba(0,0,0,0.2)',
          zIndex: 2,
          flexWrap: 'wrap'
        }}
        px={[4, 4, 5, 5]}
        py={3}
      >
        <Box py={2} sx={{ alignItems: 'center', display: 'flex' }}>
          <PageLabel />
        </Box>
        <Box py={2} sx={{ alignItems: 'center', display: 'flex' }}>
          <Button
            href="https://www.xing.com/profile/Franziska_Fieke"
            aria-label="Link: Xing Franziska Fieke"
            title="Xing Franziska Fieke"
            target="_blank"
            rel="noreferrer"
          >
            <CustomIcon alt="Xing: Franziska Fieke" name="xing" width={16} height={16} />
          </Button>
          <Button
            href="https://de.linkedin.com/in/franziska-fieke-809882114"
            aria-label="Link: Linkedin Franziska Fieke"
            title="Linkedin Franziska Fieke"
            target="_blank"
            rel="noreferrer"
            mL
          >
            <CustomIcon alt="LinkedIn: Franziska Fieke" name="linkedin" width={16} height={16} />
          </Button>
          <Button
            href="https://stackoverflow.com/users/3228483/grenzbotin"
            aria-label="Link: Stack Overflow Franziska Fieke"
            title="Stack Overflow Franziska Fieke"
            target="_blank"
            rel="noreferrer"
            mL
          >
            <CustomIcon
              alt="Stack Overflow: Franziska Fieke"
              name="stackoverflow"
              width={16}
              height={16}
            />
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
                  color: 'secondary'
                }
              }
            }}
          >
            <span style={{ color: '#65a88b', marginLeft: '1rem' }}>&#9652;</span>
            <Link href="/disclosure">{t('footer.legal_disclosure')}</Link>
            <br />
            <span style={{ color: '#65a88b', marginLeft: '1rem' }}>&#9652;</span>
            <Link href="/privacy">{t('footer.privacy')}</Link>
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Footer;
