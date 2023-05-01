/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_IMAGES: "/assets",
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
