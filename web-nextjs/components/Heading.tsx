import React from 'react';
import { Box, Text } from 'theme-ui';

import LogoSwap from './elements/LogoSwap';
import TypeWriting from './elements/TypeWriting';
import { H1 } from './elements/Typography';

interface Props {
  element: React.RefObject<HTMLDivElement>;
}

const Heading: React.FC<Props> = ({ element }) => {
  return (
    <Box
      as="header"
      title="Header"
      ref={element}
      px={[4, 5, 6]}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
        '& > #bg': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '70vh',
          zIndex: -2
        }
      }}
    >
      <svg
        id="bg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <title>2 triangles in the background</title>
        <polygon fill="var(--theme-ui-colors-primary)" points="20,0 98,80 95,0" />
        <polygon fill="var(--theme-ui-colors-secondary)" points="40,0 80,70 100,0" />
      </svg>
      <LogoSwap />
      <Box mt="1rem" sx={{ width: 'max-content', background: 'var(--theme-ui-colors-background)' }}>
        <H1>vulpis web development</H1>
      </Box>
      <Text title="Author" sx={{ fontWeight: 300, fontSize: '.9rem', color: 'primary' }}>
        Franziska Fieke
      </Text>
      <TypeWriting />
    </Box>
  );
};

export default Heading;
