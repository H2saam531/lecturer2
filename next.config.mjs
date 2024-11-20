/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '/public',
    reactStrictMode: true,
  images: {
    domains: ['https://h2saam531.github.io'],
    domains: ['h2saam531.github.io'],
    loader: "akamai",
    path: "/",
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'h2saam531.github.io',
          port: '',
          pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
