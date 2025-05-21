/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
  experimental: {
    reactCompiler: true,
  },
};

module.exports = nextConfig;
