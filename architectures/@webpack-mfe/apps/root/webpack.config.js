const path = require('path')
const { getDevConfig } = require('@webpack/config')

module.exports = getDevConfig({
  entryFile: path.resolve(__dirname, './index.tsx'),
  outputPath: path.resolve(__dirname, './dist'),
  excludeNodeModules: path.resolve(__dirname, 'node_modules'),
  appHtml: path.resolve(__dirname, './index.html'),
  exportFileNamePattern: '[name].bundle.js',
  port: 3000,
  microApp: {
    name: 'root',
    filename: 'remoteEntry.js',

    // which apps to be consumed by the main apps
    remotes: {
      home: 'home@http://localhost:3001/remoteEntry.js',
      productlist: 'productlist@http://localhost:3002/remoteEntry.js',
      product: 'product@http://localhost:3003/remoteEntry.js',
    },

    // which code to be exposed to public to access via remoteEntry.js file
    exposes: {
      './App': './App.tsx',
    },
    shared: {
      react: {
        singleton: true,
        eager: true,
      },
      'react-dom': {
        singleton: true,
        eager: true,
      },
    },
  },
})
