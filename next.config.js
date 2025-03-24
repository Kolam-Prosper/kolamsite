import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // This is important for Netlify
  trailingSlash: true,
  // Only needed if you're using the App Router
  images: {
    unoptimized: true,
  },
}

export default nextConfig

