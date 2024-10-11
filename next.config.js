/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-b213a1fb448445b2a1bd745a11fba172.r2.dev',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'nextui.org',
        port: '',
        pathname: '/images/**',
      },
    ],
  },}

module.exports = nextConfig
