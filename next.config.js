/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tpc.googlesyndication.com",
      "cms.nhl.bamgrid.com",
      "cdn.vox-cdn.com",
      "fanatics.frgimages.com",
      "logos-world.net",
      "www-league.nhlstatic.com",
    ],
  },
};

module.exports = nextConfig
