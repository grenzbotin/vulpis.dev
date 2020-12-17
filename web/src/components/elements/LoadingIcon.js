import React from 'react';
import T from 'prop-types';

import { Logo } from './Logo';

function LoadingIcon({ width, height, mL }){
  return (
    <Logo
        alt="loading.."
        height={`${height}px`}
        width={`${width}px`}
        style={{
          borderStyle: 'solid',
          borderColor: '#65a88b',
          borderRadius: 100,
          borderWidth: 5,
          zIndex: 1,
          marginLeft: mL && '.5rem',
        }}
        animate={1}
        animationtype="infinite"
      />
  );  
}

LoadingIcon.propTypes = {
  width: T.number,
  height: T.number,
  mL: T.bool,
}

export default LoadingIcon;
