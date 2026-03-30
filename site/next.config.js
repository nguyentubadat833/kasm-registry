/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'ReyTech',
    description: 'The official store for ReyTech supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/nguyentubadat833/kasm-registry/blob/1.1/workspaces/Chromium/workspace.json',
    contactUrl: '',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
