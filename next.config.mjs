/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  // Allow MDX files to be imported in the app
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default nextConfig;
