import React from 'react';
import T from 'prop-types';
import { Text } from 'theme-ui';

function PageLabel({ mL }) {
  return (
    <Text title="Label" variant="pageLabel" color="navbarText" sx={{ marginLeft: mL && '1rem' }}>
      vulpis web development
      <br />
      <span style={{ color: '#ADADAD' }}>Franziska Fieke</span>
    </Text>
  );
}

PageLabel.propTypes = {
  mL: T.bool,
};

export default PageLabel;
