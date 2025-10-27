/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "blob.v0.app",
      },
    ],
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  // Enable React strict mode for better error detection
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
  // Improve performance
  compress: true,
}

export default nextConfig
