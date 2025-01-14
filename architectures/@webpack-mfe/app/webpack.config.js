const path = require('path')
const { getDevConfig } = require('webpack-config')

module.exports = getDevConfig({
  entryFile: path.resolve(__dirname, './index.tsx'),
  outputPath: path.resolve(__dirname, './dist'),
  appHtml: path.resolve(__dirname, './index.html'),
  exportFileNamePattern: '[name].bundle.js',
  port: 3000,
})
