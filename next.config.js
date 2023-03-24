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
                hostname: 'api.rtrend.site',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

module.exports = nextConfig;
