import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import RawLogo from '../../assets/svg/logo_green.svg';
import LogoNaked from '../../assets/svg/logo_wo.svg';

interface LogoProps {
	animate?: number,
	animationtype?: string,
	alt?: string,
	title?: string,
}

const spinning = keyframes`
	from { transform:rotate(0deg); }
	to { transform:rotate(359deg); }
`;

const Logo = styled(RawLogo)<LogoProps>`
	animation: ${props => props.animate && css`${spinning} 1s ease ${props.animationtype}`}
`;

export {
	Logo,
	LogoNaked,
};
