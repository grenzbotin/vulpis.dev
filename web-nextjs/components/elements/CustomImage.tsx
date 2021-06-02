import styled from '@emotion/styled';
import Image from 'next/image';

interface ImageProps {
  height: number;
  width: number;
  float?: boolean;
  rounded?: boolean;
  layout?: 'intrinsic' | 'fixed' | 'responsive';
  src?: string;
  alt?: string;
}

const CustomImageWrapper = styled.div<ImageProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: ${(props) => (props.rounded ? props.height / 2 : 0)}px;
  border-style: solid;
  border-color: var(--theme-ui-colors-secondary);
  @media screen and (min-width: 475px) {
    float: ${(props) => (props.float ? props.float : 'right')};
    margin: 1rem 2rem;
  }
  @media screen and (max-width: 474px) {
    display: flex;
    margin: 0 auto;
  }
  & > div > img {
    border-radius: ${(props) => (props.rounded ? props.height / 2 : 0)}px;
  }
`;

const CustomImage: React.FC<ImageProps> = ({ height, width, src, alt, layout, rounded }) => {
  return (
    <CustomImageWrapper height={height} width={width} rounded={rounded}>
      <Image alt={alt} src={`/images/${src}`} height={height} width={width} layout={layout} />
    </CustomImageWrapper>
  );
};

export default CustomImage;
