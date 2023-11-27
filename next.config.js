/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protocol to match
        hostname: "**", // Match all hostnames (wildcard)
      },
    ],
  },
};

module.exports = nextConfig;
