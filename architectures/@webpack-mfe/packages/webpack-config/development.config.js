module.exports = {
  getConfig: options => {
    return {
      mode: 'development',
      entry: '',
      output: {},
      devServer: {},
      plugins: [],
      module: {
        rules: [],
      },
      optimization: {},
    }
  },
}
