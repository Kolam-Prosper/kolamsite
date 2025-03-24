/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // This is important for Netlify
  trailingSlash: true,
  // Only needed if you're using the App Router
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

