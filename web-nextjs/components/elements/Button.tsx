import React from 'react';
import { Button as ThemeButton } from 'theme-ui';

interface ButtonProps {
  mL?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode | string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  mL,
  href,
  target,
  ...props
}) => {
  const RenderedButton: React.FC = () => {
    return (
      <ThemeButton
        disabled={disabled}
        variant="buttons.iconButton"
        sx={{ marginLeft: mL && '.2rem' }}
        {...props}
      >
        {children}
      </ThemeButton>
    );
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noreferrer"
        tabIndex={-1}
        style={{ height: 'min-content' }}
      >
        <RenderedButton />
      </a>
    );
  }

  return <RenderedButton />;
};

export default Button;
