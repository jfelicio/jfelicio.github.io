/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This is the crucial fix for the "Export doesn't exist" error
  transpilePackages: ['lucide-react'],
};

export default nextConfig;
