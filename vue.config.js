// Remove the import statement if you're not using defineConfig
// const { defineConfig } = require("@vue/cli-service");

// Export your configuration object directly
const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "dist"),
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/[name].[hash:8].[ext]",
              },
            },
          ],
        },
      ],
    },
  },
};
