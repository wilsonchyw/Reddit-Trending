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
