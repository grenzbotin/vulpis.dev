import React from 'react';
import { Text } from 'theme-ui';

interface Props {
  mL?: boolean;
}

const PageLabel: React.FC<Props> = ({ mL }) => {
  return (
    <Text
      title="Label: vulpis web development Franziska Fieke"
      variant="pageLabel"
      color="navbarText"
      sx={{ marginLeft: mL && '1rem' }}
    >
      vulpis web development
      <br />
      <span style={{ color: '#ADADAD' }}>Franziska Fieke</span>
    </Text>
  );
};

export default PageLabel;
