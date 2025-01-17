const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  getDevConfig: options => {
    return {
      mode: 'development',
      target: 'web',
      entry: options.entryFile,
      cache: true,
      output: {
        path: options.outputPath,
        filename: options.exportFileNamePattern || '[name].bundle.js',
      },
      devServer: {
        static: {
          directory: options.outputPath,
        },
        open: false,
        port: options.port || 3000,
        historyApiFallback: true,
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: 'defaults' }],
                  '@babel/preset-typescript',
                  '@babel/preset-react',
                ],
              },
            },
            include: options.entryFile,
            exclude: /node_modules/,
          },
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {},
      },
      plugins: [
        options.microApp &&
          Object.keys(options.microApp).length &&
          new ModuleFederationPlugin(options.microApp),
        new HtmlWebPackPlugin({
          template: options.appHtml,
          filename: 'index.html',
        }),
      ].filter(Boolean),
      optimization: {
        splitChunks: {
          chunks: 'async',
        },
      },
    }
  },
}
