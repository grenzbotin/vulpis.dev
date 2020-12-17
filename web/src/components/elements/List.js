import React from 'react';
import { Badge, Text } from 'theme-ui';
import T from 'prop-types';
import { withTranslation } from 'react-i18next';

const BADGES = {
  FE: 'secondary',
  BE: 'primary',
  EE: 'tertiary',
};

function List({ listElements, t }) {
  return (
    <Text
      variant="styles.list"
      sx={{
        '& > ul': {
          listStyle: 'none',
          paddingLeft: '1rem',
          textIndent: '-1rem',
        },
        '& > ul > li > .badge': {
          listStyle: 'none',
          textIndent: '0rem',
          verticalAlign: 'middle',
        },
        '& > ul > li:before': {
          content: '"\\25BE"',
          color: '#65a88b',
          display: 'block',
          float: 'left',
          width: '1rem',
          fontWeight: 800,
        },
      }}
    >
      <ul>
        {listElements.map(el => <li key={el.text}>{t(el.text)} {el.badges && el.badges.map(badge => <Badge className="badge" variant={BADGES[badge]} key={badge} ml={'.5rem'}>{badge}</Badge>)}</li>)}
      </ul>
      </Text>
  );
}

List.propTypes = {
  t: T.func.isRequired,
  listElements: T.array.isRequired,
}

export default withTranslation()(List);