import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import { SSRProvider } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Footer from 'src/components/Footer';
import _Navbar from 'src/components/Navbar';
import Setting from 'src/components/Setting';
import { store } from '../store';
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
    return (
        <SSRProvider>
            <Head>
                <title>Reddit Trending | The financial trending on Reddit</title>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" ></link>
                <meta name="theme-color" content="#fff" />
                <meta name="description" content="See what financial related news people are hotly discussing in the last 24 hours" />
            </Head>
            <Provider store={store}>
                <_Navbar />
                <Setting />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </SSRProvider>
    );
}
