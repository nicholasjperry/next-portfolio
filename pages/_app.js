import { ThemeProvider } from '@emotion/react';
import theme from '../theme/theme.js';
import getConfig from 'next/config';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('components/Header'));
const DynamicGlobalStyles = dynamic(() => import('components/GlobalStyles/GlobalStyles'));
const DynamicContextWrapper = dynamic(() => import('components/ContextWrapper'));

function MyApp({ Component, pageProps, navigation }) {

    return (
        <>
            <DefaultSeo {...SEO} />
            <ThemeProvider theme={theme}>
                <DynamicGlobalStyles />
                <DynamicContextWrapper navigation={navigation}>
                    <DynamicHeader />
                </DynamicContextWrapper>
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