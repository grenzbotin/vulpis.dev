import React from 'react';
import { Badge } from 'theme-ui';
import T from 'prop-types';

function BadgeFlag({ label, ...props }) {
  return (
    <Badge className="badge" sx={{ width: '25px', textAlign: 'center' }} {...props}>{label}</Badge>
  );
}

BadgeFlag.propTypes = {
  label: T.string.isRequired,
}

export default BadgeFlag;