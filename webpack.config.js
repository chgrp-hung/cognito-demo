const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-1']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
};
