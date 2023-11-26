/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: ['./'],
      prependData: `@import "src/scss/main.scss";`,
  },
};

module.exports = nextConfig;
