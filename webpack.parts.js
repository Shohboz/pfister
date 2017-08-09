const path = require("path");

exports.devServer = ({ host, port, stats = "errors-only" } = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats,
    host,
    port,
    overlay: {
      errors: true,
      warnings: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
});

exports.babelLoader = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: path.join(__dirname, "node_modules/*")
      }
    ]
  }
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        include,
        exclude,

        use: {
          loader: "url-loader",
          options
        }
      }
    ]
  }
});
