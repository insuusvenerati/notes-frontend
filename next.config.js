const withPWA = require("next-pwa");
const withPreact = require("next-plugin-preact");

const nextConfig = {
  future: {
    webpack5: true,
  },
};

const pwaConfig = {
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
};

if (process.env.NODE_ENV === "production") {
  module.exports = withPWA(withPreact({ ...nextConfig, ...pwaConfig }));
} else {
  module.exports = withPreact(nextConfig);
}
