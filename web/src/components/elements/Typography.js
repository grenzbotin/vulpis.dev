import React from 'react';
import T from 'prop-types';
import { Heading, Text } from 'theme-ui';

const H1 = ({ children }) => (
  <Heading variant='styles.h1' as="h1">
    {children}
  </Heading>
);

const H2 = ({ children }) => (
  <Heading variant='styles.h2' as="h2">
    <Text sx={{ color: 'secondary', paddingRight: '.4rem' }}>{'//'}</Text> {children}.
  </Heading>
);

const H3 = ({ children }) => (
  <Heading variant='styles.h3' as="h3">
    {children}
  </Heading>
);


H1.propTypes = {
  children: T.node.isRequired,
};

H2.propTypes = {
  children: T.node.isRequired,
};

H3.propTypes = {
  children: T.node.isRequired,
};

export {
  H1,
  H2,
  H3,
}
