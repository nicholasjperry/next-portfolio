import Header from 'components/Header';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import theme from '../theme/theme.js';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import { DefaultSeo } from 'next-seo';
import ContextWrapper from 'components/ContextWrapper';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core';
// fontawesomeConfig.autoAddCss = false;

import SEO from '../next-seo.config';


function MyApp({ Component, pageProps, navigation }) {

    return (
        <>
            <DefaultSeo {...SEO} />
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <ContextWrapper navigation={navigation}>
                    <Header />
                </ContextWrapper>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async () => {
    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
    const navigation = await res.json();

    return { navigation }
}

export default MyApp;