import React from 'react';
import { Box, Text } from 'theme-ui';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { H3 } from './elements/Typography';
import { getMedia } from '../lib/media';
import Link from 'next/link';
import { Article } from '../lib/api';

interface BoxProps {
  image?: string;
}

interface ArticleBoxProps {
  article: Article;
}

const StyledBox = styled(Box)<BoxProps>`
  background: var(--theme-ui-colors-articleBoxBackground);
  box-shadow: inset 0px 0px 0px 0px var(--theme-ui-colors-secondary);
  transition: box-shadow 0.2s linear;
  position: relative;
  min-height: 200px;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0px 0px 0px 2px var(--theme-ui-colors-secondary);
    transition: box-shadow 0.2s linear;

    & .shape-cover {
      background: #65a88b00;
      transition: background 0.2s linear;
    }
  }

  & .shape {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--theme-ui-colors-secondary);
    ${(props) =>
      props.image &&
      css`
        background-image: url(${props.image});
        background-size: cover;
      `}
    z-index: -1;
    clip-path: polygon(83% 0%, 49% 100%, 100% 100%, 100% 0%);
  }

  & .shape-cover {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #65a88b8c;
    transition: background 0.2s linear;
    z-index: -1;
    clip-path: polygon(83% 0%, 49% 100%, 100% 100%, 100% 0%);
  }

  & .subtitle {
    background: var(--theme-ui-colors-background);
    padding: 0.2rem;
    font-size: 0.9rem;
  }
`;

const ArticleBox: React.FC<ArticleBoxProps> = ({ article }) => {
  const imageUrl = getMedia(article.image);

  return (
    <Link as={`/notes/${article.slug}`} href="/notes/[id]">
      <StyledBox image={imageUrl} title="some content" mx={[4, 5, 6]} p={4}>
        <div className="shape" />
        <div className="shape-cover" />
        <H3 noTopMargin>{article.title}</H3>
        <span className="subtitle">
          <Text>{article.description}</Text>
        </span>
      </StyledBox>
    </Link>
  );
};

export default ArticleBox;
