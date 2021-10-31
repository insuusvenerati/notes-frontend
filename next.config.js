const withPWA = require("next-pwa");

const nextConfig = {
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  },
};

const pwaConfig = {
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
};

if (process.env.NODE_ENV === "production") {
  module.exports = withPWA({ ...nextConfig, ...pwaConfig });
} else {
  module.exports = nextConfig;
}
