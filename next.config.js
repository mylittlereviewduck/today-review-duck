/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	reactStrictMode: true,
	images: {
		domains: ['mylittlereviewduck.site'],
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
				port: "",
				pathname: "/**",
			},
		],
	},

	async rewrites() {
		return process.env.NEXT_PUBLIC_MODE === "local"
			? [
				{
					source: "/api/:path*",
					destination: "https://api.mylittlereviewduck.site/:path*",
				},
			]
			: [];
	},
};

module.exports = nextConfig;
