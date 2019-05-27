import Link from 'next/link';
import HeaderStyles from './../styles/HeaderStyles';

const Header = () => (
  <HeaderStyles>
    <Link href="/">
      <a>
        <img src="https://s3-us-west-2.amazonaws.com/routable/logo/logo-white.svg" alt="Routable" />
      </a>
    </Link>
  </HeaderStyles>
);

export default Header;
