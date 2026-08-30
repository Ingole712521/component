import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  experimental: {
    // lucide-react and react-icons are optimized by default in Next.js 16
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
