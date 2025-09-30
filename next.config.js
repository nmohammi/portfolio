/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
