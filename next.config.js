/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    SITE_URL: process.env.SITE_URL,
  },
};

module.exports = nextConfig;
