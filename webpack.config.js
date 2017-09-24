const webpack = require("webpack");
const path = require("path");
const parts = require("./webpack.parts");
const CONFIG_PATH = "config/webpack";

const PATHS = {
  shared: path.resolve(__dirname, "shared"),
  src: path.resolve(__dirname, "client")
};

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const environment = (target => {
  switch (target) {
    case "test":
      return "test";
    case "build":
      return "production";
    default:
      return "development";
  }
})(TARGET);

module.exports = require("webpack-merge").smart(
  parts.babelLoader(),
  {
    context: PATHS.src,

    entry: {
      src: ["index"]
    },

    output: {
      path: PATHS.build,
      publicPath: "/",
      filename: "bundle.[hash:8].js",
      chunkFilename: "chunk_[name].[chunkhash:6].js"
    },

    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
        "window.jQuery": "jquery"
      }),
      parts.generateAssetsConfig()
    ],

    resolve: {
      alias: {
        shared: PATHS.shared,
        components: path.resolve(PATHS.shared, "components")
      },
      modules: ["node_modules", PATHS.src],
      extensions: [".js"]
    }
  },
  require(path.join(__dirname, CONFIG_PATH, environment))(__dirname)
);
