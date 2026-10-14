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
        destination: "/blog/weld-neck-vs-lap-joint-flange",
        permanent: true,
      },
      {
        source: "/blog/selecting-right-material-weld-neck",
        destination: "/blog/right-material-for-weld-neck-flanges",
        permanent: true,
      },
      {
        source: "/blog/weld-neck-flange-price-breakdown-usa-2025",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/weld-neck-flange-design-for-high-pressure-applications",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/structural-integrity-of-weld-neck-connections",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/installation-and-welding-best-practices",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "https://texasflange.com/contact-us/?ref=weldneckflanges",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
