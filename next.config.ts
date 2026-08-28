import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // lucide-react and react-icons are optimized by default in Next.js 16
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
