import { Analytics } from '@vercel/analytics/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SSRProvider } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Footer from 'src/components/Footer';
import _Navbar from 'src/components/Navbar';
import Setting from 'src/components/Setting';
import { store } from '../store';
import '../styles/globals.css';
import '../styles/tagcloud.css';
import '../styles/blog.css';
export default function App({ Component, pageProps }: AppProps) {
    return (
        <SSRProvider>
            <Head>
                <title>Reddit Trending | The financial trending on Reddit</title>
                <link rel="icon" href="/logos/logo-transparent-svg.svg" type="image/x-icon"></link>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css"></link>
                <meta name="keywords" content="Financial, Stock, Market, reddit trend, daily trend"></meta>
                <meta name="theme-color" content="#fff" />
                <meta
                    name="description"
                    content="Maximize your financial success by staying ahead of the game. Reddit Trending visualizes million records of financial trends on Reddit, providing real-time insights to help you make informed decisions."
                />
            </Head>
            <Provider store={store}>
                <_Navbar />
                <Setting />
                <Component {...pageProps} />
                <Footer />
            </Provider>
            <Analytics />
            
        </SSRProvider>
    );
}
