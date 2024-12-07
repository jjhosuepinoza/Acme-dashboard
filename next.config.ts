import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;

module.exports = {
  reactStrictMode: true,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
};

