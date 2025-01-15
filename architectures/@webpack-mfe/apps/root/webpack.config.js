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
      homepage: 'homepage@http://localhost:3001/remoteEntry.js',
    },

    // which code to be exposed to public to access via remoteEntry.js file
    exposes: {},
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
