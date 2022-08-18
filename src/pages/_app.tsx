import '../styles/globals.css'
import Layout from '@/components/layout/BaseLayout';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'src/store';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}

export default MyApp
