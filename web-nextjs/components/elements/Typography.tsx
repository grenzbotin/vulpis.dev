import React from 'react';
import { Heading, Text } from 'theme-ui';

interface TypoProps {
  children: React.ReactNode;
  highlight?: boolean;
  noTopMargin?: boolean;
}

const H1: React.FC<TypoProps> = ({ children, highlight }) => (
  <Heading variant={highlight ? 'styles.h2' : 'styles.h1'} as="h1">
    {highlight ? (
      <>
        <Text sx={{ color: 'secondary', paddingRight: '.4rem' }}>{'//'}</Text> {children}.
      </>
    ) : (
      children
    )}
  </Heading>
);

const H2: React.FC<TypoProps> = ({ children }) => (
  <Heading variant="styles.h2" as="h2">
    <Text sx={{ color: 'secondary', paddingRight: '.4rem' }}>{'//'}</Text> {children}.
  </Heading>
);

const H3: React.FC<TypoProps> = ({ children, noTopMargin }) => (
  <Heading variant="styles.h3" as="h3" style={{ marginTop: noTopMargin ? 0 : '2rem' }}>
    {children}
  </Heading>
);

const H4: React.FC<TypoProps> = ({ children, noTopMargin }) => (
  <Heading variant="styles.h4" as="h4" style={{ marginTop: noTopMargin ? 0 : '1rem' }}>
    {children}
  </Heading>
);

export { H1, H2, H3, H4 };
