/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	headers: async () => {
		return [
			{
				source: '/:path*',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400' },
				],
			},
		]
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
			};
		}
		return config;
	},
};

module.exports = nextConfig;


