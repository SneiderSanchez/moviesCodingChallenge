/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["image.tmdb.org", "themoviedb.org"],
  },
};

export default nextConfig;
