/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Use GitHub Pages base path only for production builds
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/portfolio' : ''
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
