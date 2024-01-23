/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            env: {
                GooglePlacesApiKey: "test"
            },
            protocol: 'https',
            hostname: 'images.unsplash.com',
        }, ],
    },
}

module.exports = nextConfig