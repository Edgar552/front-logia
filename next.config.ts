import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.midominio.com",
      }
    ]
  },

  poweredByHeader: false,

  compress: true
};

export default nextConfig;