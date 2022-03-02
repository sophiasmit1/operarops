/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  future: {
    webpack: true,
  },
  images: {
    domains: ['upload.wikimedia.org', 'sun9-80.userapi.com']
  }
}