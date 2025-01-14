const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  getDevConfig: options => {
    return {
      mode: 'development',
      entry: options.entryFile,
      output: {
        path: options.outputPath,
        filename: options.exportFileNamePattern || '[name].bundle.js',
      },
      devServer: {
        static: {
          directory: options.outputPath,
        },
        open: true,
        port: options.port || 3000,
        historyApiFallback: true,
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            include: options.entryFile,
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
