const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/docs/test-document',
                permanent: true,
            },
        ];
    },
};

module.exports = withContentlayer(nextConfig);
