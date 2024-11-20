/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '/public',
    reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
};

export default nextConfig;
