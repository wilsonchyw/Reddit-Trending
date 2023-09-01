/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true
    },
    /* experimental: {
        runtime: 'experimental-edge'
    } */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.reddittrend.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

module.exports = nextConfig;
