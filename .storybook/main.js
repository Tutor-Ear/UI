const path = require("path");

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules-preset",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@Components": path.resolve(__dirname, "../components"),
      "@tutor-ear/ui/*": path.resolve(__dirname, "../*"),
      "@tutor-ear/ui/layouts": path.resolve(__dirname, "../layouts"),
      "@tutor-ear/ui/utils": path.resolve(__dirname, "../utils"),
      "@tutor-ear/ui/hooks": path.resolve(__dirname, "../hooks"),
    };

    return config;
  },
};
