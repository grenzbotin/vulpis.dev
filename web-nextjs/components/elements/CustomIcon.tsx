import React from 'react';

import DeFlag from '../../assets/svg/de.svg';
import EnFlag from '../../assets/svg/en.svg';
import LinkedIn from '../../assets/svg/linkedin.svg';
import Xing from '../../assets/svg/xing.svg';
import Stackoverflow from '../../assets/svg/stackoverflow.svg';
import Moon from '../../assets/svg/moon.svg';
import Sun from '../../assets/svg/sun.svg';
import Code from '../../assets/svg/code.svg';
import Internet from '../../assets/svg/internet.svg';

const getIcon = (
  name: string,
  props: Record<string, string | number | Record<string, string | number>>
): JSX.Element => {
  switch (name) {
    case 'de':
      return <DeFlag {...props} />;
    case 'en':
      return <EnFlag {...props} />;
    case 'linkedin':
      return <LinkedIn {...props} />;
    case 'xing':
      return <Xing {...props} />;
    case 'stackoverflow':
      return <Stackoverflow {...props} />;
    case 'moon':
      return <Moon {...props} />;
    case 'sun':
      return <Sun {...props} />;
    case 'internet':
      return <Internet {...props} />;
    case 'code':
      return <Code {...props} />;
  }
};

const CustomIcon = ({
  name,
  height,
  width,
  title,
  alt,
  style
}: {
  name: string;
  height: number;
  width: number;
  alt: string;
  title?: string;
  style?: Record<string, string | number>;
}): JSX.Element => {
  return getIcon(name, { height, width, alt, title, style });
};

export default CustomIcon;
