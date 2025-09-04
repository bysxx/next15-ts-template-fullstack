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
    viewTransition: true,
  },
};

module.exports = nextConfig;
