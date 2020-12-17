import styled from '@emotion/styled';

const Image = styled.img(props => ({
  height: `${props.height}px`,
  width: `${props.width}px`,
  borderRadius: props.rounded ? (props.height / 2) : 0,
  borderStyle: 'solid',
  borderColor: '#65a88b',
  '@media screen and (min-width: 475px)': {
    float: props.float ? props.float : 'right',
    margin: '1rem 2rem',
  },
  '@media screen and (max-width: 474px)': {
    display: 'flex',
    margin: '0 auto',
  },
}));

export default Image;
