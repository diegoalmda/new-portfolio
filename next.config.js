/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_IMAGES: "/assets",
    FORM_KEY: "xwkzbjqz",
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
