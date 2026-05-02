/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'spilltheteaprod.com',
            },
        ],
    },
};

export default nextConfig;
