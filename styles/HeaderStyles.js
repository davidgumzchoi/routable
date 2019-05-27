import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 0 auto;
  background-image: url('https://s3-us-west-2.amazonaws.com/routable/images/_global/background/hero_background.svg'),
    linear-gradient(213.03deg, #2c84ff, #975bff);
  background-attachment: fixed;
  background-position: -1275px 25px, 50%;
  background-repeat: repeat-x;
  padding: 2rem 1rem;

  img {
    width: 11.2rem;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default HeaderStyles;
