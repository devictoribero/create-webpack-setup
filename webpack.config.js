var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-1'] }
        }]
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
      host: 'localhost',
      port: 5000,
      historyApiFallback: true,
      contentBase: './dist',
      open: true,
      openPage: '', // <== Add this
    },
  plugins: [
    new ExtractTextPlugin({
        filename: 'app.css',
        disable: false,
        allChunks: true
    })
  ],
};
