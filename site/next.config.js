/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'ReyTech',
    description: 'The official store for ReyTech supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://nguyentubadat833.github.io/kasm-registry/',
    contactUrl: '',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
