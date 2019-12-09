let path = require('path')
const webpack = require('webpack')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('api', path.resolve('./src/api/index.js'))
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      api: 'api'
    }])
  },
  devServer: {
    https: false,
    hotOnly: false,
    // 设置代理
    proxy: {
      // proxy table example
      '/': {
        target: 'http://127.0.0.1:3000', // l
        changeOrigin: true
      }
    }
  }
}
