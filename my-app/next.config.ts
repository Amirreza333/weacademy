import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'curlyplus.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      
    ],
  },

  
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;