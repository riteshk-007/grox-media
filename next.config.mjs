/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Cache optimized images for 2 minutes
        minimumCacheTTL: 120,
        remotePatterns: [
            { protocol: 'https', hostname: "g0p7auwucr.ufs.sh" },
            { protocol: 'https', hostname: "utfs.io" },
            { protocol: 'https', hostname: "pub-a3d2b35862c1483894ffbee942bb995e.r2.dev" },
        ]
    },
    // Cache static assets aggressively
    async headers() {
        return [
            {
                source: '/_next/image(.*)',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=120, stale-while-revalidate=60' },
                ],
            },
            {
                source: '/_next/static/(.*)',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                ],
            },
        ];
    },
};

export default nextConfig;
