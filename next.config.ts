const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use 'export' for static generation
  basePath: isProd ? '/ronaldkroening.github.io' : '',
  assetPrefix: isProd ? '/ronaldkroening.github.io/' : '',
};

module.exports = nextConfig;
