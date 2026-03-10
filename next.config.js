/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/blog/weld-neck-flange-design-high-pressure",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/structural-integrity-weld-neck-connections",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/installation-welding-best-practices",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/weld-neck-flange-cost-2025",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/weld-neck-vs-lap-joint-guide",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/selecting-right-material-weld-neck",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/blog",
        permanent: false,
      },
      {
        source: "/about",
        destination: "/",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "https://texasflange.com/contact-us",
        permanent: false,
      },
      {
        source: "/services",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
