// import Layout from '../components/Layout'
// import '../styles/globals.css'
// import { UserProvider } from '@auth0/nextjs-auth0';

// function MyApp({ Component, pageProps }) {

//   const { user } = pageProps;
//   return (
//    <UserProvider user={user}>
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//      </UserProvider>
//   )
// }
// export default MyApp
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { UserProvider } from '@auth0/nextjs-auth0';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </UserProvider>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
