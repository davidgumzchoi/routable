import App, { Container } from 'next/app';
import Page from '../components/Page';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Page>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Page>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
