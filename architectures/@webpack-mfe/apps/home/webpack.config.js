const path = require('path')
const { getDevConfig } = require('@webpack/config')

module.exports = getDevConfig({
  entryFile: path.resolve(__dirname, './index.tsx'),
  outputPath: path.resolve(__dirname, './dist'),
  excludeNodeModules: path.resolve(__dirname, 'node_modules'),
  appHtml: path.resolve(__dirname, './index.html'),
  exportFileNamePattern: '[name].bundle.js',
  port: 3001,
  microApp: {
    name: 'homepage',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './App.tsx',
    },
    shared: {
      react: {
        singleton: true,
      },
      'react-dom': {
        singleton: true,
      },
    },
  },
})
