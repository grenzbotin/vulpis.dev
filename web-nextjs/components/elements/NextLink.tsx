import React from 'react';
import NextLink from 'next/link';

interface LinkWrapProps {
  children: React.ReactNode;
  refAs: string;
  ref?: React.RefObject<HTMLElement>;
}

const LinkWrap: React.ForwardRefRenderFunction<HTMLElement, LinkWrapProps> = (
  { children, refAs, ...props },
  ref
) => {
  if (refAs) {
    props[refAs] = ref;
  }
  return <>{React.isValidElement(children) ? React.cloneElement(children, props) : null}</>;
};

const LinkWrapper = React.forwardRef(LinkWrap);

interface LinkProps {
  children: React.ReactNode;
  refAs?: string;
  href: string | Record<string, unknown>;
  locale: string;
}

export const Link: React.FC<LinkProps> = ({ refAs, children, ...props }) => {
  return (
    <NextLink {...props}>
      <LinkWrapper refAs={refAs}>{children}</LinkWrapper>
    </NextLink>
  );
};
