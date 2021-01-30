import React from 'react';
import { useRouter } from 'next/router';
import { Flex, Box } from 'theme-ui';

import DayNightToggle from './elements/DayNightToggle';
import LanguageToggle from './elements/LanguageToggle';
import { LogoNaked } from './elements/Logo';
import PageLabel from './elements/PageLabel';
import Link from 'next/link';

const navigationDefaults = ['disclosure', 'privacy', 'notes'];

interface NavbarProps {
  sticky: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ sticky }) => {
  const { pathname } = useRouter();
  const ignoreScrolling = navigationDefaults.some((p) => pathname.includes(p));
  const showNavbar = sticky || ignoreScrolling;

  return (
    <Flex
      as="nav"
      px={2}
      color="navbarText"
      bg={showNavbar && 'navbarBG'}
      title="Navigation"
      sx={{
        position: 'fixed',
        width: '100%',
        padding: '.5rem',
        alignItems: 'center',
        boxShadow: showNavbar && '0px 2px 0px 0px rgba(0,0,0,0.2)',
        zIndex: 2,
        '& > .logo-link': {
          borderWidth: '.5px',
          borderStyle: 'solid',
          borderColor: 'navbarBG',
          marginLeft: '0.5rem',
          display: 'flex',
          '&:focus': {
            borderColor: 'navbarText'
          }
        }
      }}
    >
      {showNavbar && (
        <>
          <Link href="/" aria-label="Home">
            <a className="logo-link">
              <LogoNaked name="Vulpis web development" height="30px" width="40.36px" />
            </a>
          </Link>
          <PageLabel mL />
        </>
      )}
      <Box mx="auto" />
      <LanguageToggle />
      <DayNightToggle />
    </Flex>
  );
};

export default Navbar;
