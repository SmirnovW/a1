const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: true,
    host: 'localhost',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'app',
      devServer: 'https://localhost:3000'
    })
  ],
  resolve: {
    modules: ['crs', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader']
      },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
