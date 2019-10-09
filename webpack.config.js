const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    compress: true,
    host: 'localhost',
    port: 3000,
    openPage: 'cars',
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'root',
      devServer: 'https://localhost:3000'
    })
  ],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
              },
            }
          },
          'postcss-loader',
        ]
      },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
