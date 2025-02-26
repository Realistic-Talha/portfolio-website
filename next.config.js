/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-website',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/portfolio-website/',
}

module.exports = nextConfig
