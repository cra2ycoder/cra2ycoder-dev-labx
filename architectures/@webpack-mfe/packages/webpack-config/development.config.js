const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  getDevConfig: options => {
    return {
      mode: 'development',
      target: 'web',
      entry: options.entryFile,
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
        extensions: ['.tsx', '.ts', '.js'],
        alias: {},
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: options.appHtml,
          filename: 'index.html',
        }),
      ],
      optimization: {
        splitChunks: {
          chunks: 'async',
        },
      },
    }
  },
}
