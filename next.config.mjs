// next.config.js
const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(scss|sass)$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "src"),
    });

    return config;
  },
};
