import styled from 'styled-components';

const size = {
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px'
};

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

const WrapperStyles = styled.div`
  display: grid;
  grid-template-columns: 20rem 40remrem;
  grid-gap: 2rem;

  @media ${device.tablet} {
    grid-template-columns: 20rem 60rem;
  }

  @media ${device.laptop} {
    grid-template-columns: 20rem 118rem;
  }

  @media ${device.desktop} {
    grid-template-columns: 20rem 100%;
  }
`;

export default WrapperStyles;
