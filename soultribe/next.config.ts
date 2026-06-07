import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use trailing slashes for better compatibility
  trailingSlash: true,
  
  // Set proper asset prefix for subdirectory deployments
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : undefined,
  
  // Ensure proper images configuration
  images: {
    unoptimized: true, // Required for static export on some hosts
  },
};

export default nextConfig;