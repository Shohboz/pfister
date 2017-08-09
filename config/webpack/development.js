const conf = require('../../webpack.parts');

module.exports = () =>
  require("webpack-merge").smart(
  {
    devtool: "source-map",
  },
  conf.devServer({
    host: "localhost",
    port: 8066,
    stats: {
      errors: true,
      assets: true,
      modules: false
    }
  })
);
