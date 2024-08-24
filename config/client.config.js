const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const { merge } = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = merge(baseConfig, {
  target: 'web',
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, '../build/client'),
    filename: 'client_bundle.js'
  }
})