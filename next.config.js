/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_IMAGES_SKILLS: "/assets"
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
