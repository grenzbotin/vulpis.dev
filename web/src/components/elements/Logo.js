import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

import { ReactComponent as RawLogo } from '../assets/logo_green.svg';
import { ReactComponent as LogoNaked } from '../assets/logo_wo.svg';

const spinning = keyframes`
  from { transform:rotate(0deg); }
  to { transform:rotate(359deg); }
`;

const Logo = styled(RawLogo)`
  animation: ${props => props.animate && css`${spinning} 1s ease ${props.animationtype}`}
`;

export {
  Logo,
  LogoNaked,
};
