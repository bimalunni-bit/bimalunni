/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/kys', destination: '/kys/index.html' },
      { source: '/kys/', destination: '/kys/index.html' },
    ];
  },
};

module.exports = nextConfig;
