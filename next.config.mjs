/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'spilltheteaproduction.github.io',
            },
        ],
    },
};

export default nextConfig;
