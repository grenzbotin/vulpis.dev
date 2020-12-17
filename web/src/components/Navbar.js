import React from 'react';
import T from 'prop-types';
import { Flex, Box } from "theme-ui";
import { Link, useLocation } from 'react-router-dom';

import DayNightToggle from './elements/DayNightToggle';
import LanguageToggle from './elements/LanguageToggle';
import { LogoNaked } from './elements/Logo';
import PageLabel from './elements/PageLabel';

const navigationDefaults = ['disclosure', 'privacy'];

function Navbar({ sticky }) {
  const { pathname } = useLocation();
  const ignoreScrolling = navigationDefaults.some(p => pathname.includes(p));
  const showNavbar = (sticky || ignoreScrolling);

  return (
    <Flex
      as="nav"
      px={2}
      color='navbarText'
      bg={showNavbar && 'navbarBG'}
      alignItems='center'
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
          <Link className="logo-link" to="/" aria-label="Home" as="button">
            <LogoNaked
              alt="Vulpis web development"
              height="30px"
              width="40.36px"
            />
          </Link>
          <PageLabel mL />
        </>
      )}
      <Box mx='auto' />
      <LanguageToggle />
      <DayNightToggle />
    </Flex>
  );
}

Navbar.propTypes = {
  sticky: T.bool,
}

export default Navbar;
