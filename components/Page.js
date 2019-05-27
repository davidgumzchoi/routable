import { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue',
  fontSize: '1.2rem',
  colorPrimary: '#3056ba'
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    text-rendering: optimizeLegibility;
    font-weight: 400;
  }

  *, *:before, *:after{
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: ${theme.fontSize};
    line-height: 1.5;
    font-family: ${theme.fontFamily};
  }

  a {
    text-decoration: none;
    color: ${theme.colorPrimary};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PageContainer = styled.div`
  background: transparent;
  color: ${theme.fontColor};
`;

const BodyContainer = styled.div`
  margin: 0 auto;
  max-width: ${theme.width};
  padding: ${theme.headerHeight} 0;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <PageContainer>
            <Meta />
            <Header />
            <BodyContainer>{this.props.children}</BodyContainer>
          </PageContainer>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
