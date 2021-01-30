import React from 'react';
import { Text } from 'theme-ui';
import BadgeFlag from './BadgeFlag';

const BADGES: { [key: string]: string } = {
  FE: 'secondary',
  BE: 'primary',
  EE: 'tertiary'
};

interface ListElement {
  text: string;
  badges?: Array<string>;
}

interface ListElements {
  listElements: Array<ListElement>;
}

const List: React.FC<ListElements> = ({ listElements }) => {
  return (
    <Text
      variant="styles.list"
      sx={{
        '& > ul': {
          listStyle: 'none',
          paddingLeft: '1rem',
          textIndent: '-1rem'
        },
        '& > ul > li > .badge': {
          listStyle: 'none',
          textIndent: '0rem',
          verticalAlign: 'middle'
        },
        '& > ul > li:before': {
          content: '"\\25BE"',
          color: '#65a88b',
          display: 'block',
          float: 'left',
          width: '1rem',
          fontWeight: 800
        }
      }}
    >
      <ul>
        {listElements.map((el) => (
          <li key={el.text}>
            {el.text}{' '}
            {el.badges &&
              el.badges.map((badge) => (
                <BadgeFlag variant={BADGES[badge]} key={badge} ml={'.5rem'} label={badge} />
              ))}
          </li>
        ))}
      </ul>
    </Text>
  );
};

export default List;
