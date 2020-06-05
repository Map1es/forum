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
        target: 'http://ywjl103.cn', // l
        changeOrigin: true
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/styles/common/base.less')]
    }
  }
}
