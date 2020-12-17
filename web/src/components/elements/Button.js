import React from 'react';
import T from 'prop-types';
import { Button as RebassButton, Link } from "theme-ui";

function Button({ children, mL, href, target, ...props }) {
  function RenderedButton() {
    return (
      <RebassButton
        variant="buttons.iconButton"
        sx={{ marginLeft: mL && '.2rem' }}
        {...props}
      >
        {children}
      </RebassButton>
    );
  }

  if (href) {
    return (
      <Link href={href} target={target} rel="noreferrer" tabIndex={0} sx={{ height: 'min-content'}} as={RenderedButton} />
    );
  }

  return <RenderedButton />;
}

Button.propTypes = {
  children: T.node.isRequired,
  mL: T.bool,
  href: T.string,
  target: T.string,
};


export default Button;
