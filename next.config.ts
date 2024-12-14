/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * The output directory for your Next.js application.
   * The default, "export", is appropriate for most cases.
   */
  output: 'export',

  /**
   * The base path for your Next.js application.
   * Use this if you want to deploy your app within a specific subdirectory. 
   */
  // basePath: '/src/app', 

  /**
   * The prefix used for all assets served from your application.
   * Adjust this based on your deployment environment. 
   */
  // assetPrefix: '/public', 

  /**
   * Add any other Next.js configuration options as needed.
   * See https://nextjs.org/docs/app/building-your-application/configuration for complete documentation
   */
  // ... 
};

module.exports = nextConfig;

export default nextConfig;
