const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
}