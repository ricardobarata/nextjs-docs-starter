const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/docs/test-document',
                permanent: false,
            },
        ];
    },
};

module.exports = withContentlayer(nextConfig);
