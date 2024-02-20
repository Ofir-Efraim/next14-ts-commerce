/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
        SERVER_ENDPOINT: process.env.SERVER_ENDPOINT,
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'zechem-products.s3.amazonaws.com',
        }, ],
    },
}

module.exports = nextConfig