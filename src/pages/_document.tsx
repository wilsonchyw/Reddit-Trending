import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
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
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
