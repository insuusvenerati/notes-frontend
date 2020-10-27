const withSourceMaps = require("@zeit/next-source-maps");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const withOffline = require("next-offline");

const COMMIT_SHA =
  process.env.VERCEL_GITHUB_COMMIT_SHA ||
  process.env.VERCEL_GITLAB_COMMIT_SHA ||
  process.env.VERCEL_BITBUCKET_COMMIT_SHA;

const basePath = "";

const sourceMapConfig = {
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  webpack: (config, options) => {
    if (!options.isServer) {
      config.node = {
        fs: "empty",
        net: "empty",
      };
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }
    if (
      process.env.SENTRY_DSN &&
      process.env.SENTRY_ORG &&
      process.env.SENTRY_PROJECT &&
      process.env.SENTRY_AUTH_TOKEN &&
      COMMIT_SHA &&
      process.env.NODE_ENV === "production"
    ) {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: ".next",
          ignore: ["node_modules"],
          stripPrefix: ["webpack://_N_E/"],
          urlPrefix: `~${basePath}/_next`,
          release: COMMIT_SHA,
        })
      );
    }
    return config;
  },
  basePath,
};

const swConfig = {
  target: "serverless",
  transformManifest: (manifest) => ["/"].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

const typescriptConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
};

if (process.env.NODE_ENV === "production") {
  module.exports = withOffline(withSourceMaps({ ...sourceMapConfig, ...typescriptConfig }));
}
