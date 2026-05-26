import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },

      {
        protocol: "https",
        hostname: "api.granlogiadelpotosi.com",
      },
    ],
  },
};

export default nextConfig;
