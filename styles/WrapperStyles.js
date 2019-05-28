import styled from 'styled-components';

const size = {
  mobile: '500px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px'
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

const WrapperStyles = styled.div`
  @media ${device.mobile} {
    display: grid;
    grid-template-columns: 16rem 32rem;
    grid-gap: 2rem;
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 20rem 54.8rem;
    grid-gap: 2rem;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 20rem 80.4rem;
    grid-gap: 2rem;
  }

  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 20rem 234rem;
    grid-gap: 2rem;
  }
`;

export default WrapperStyles;
