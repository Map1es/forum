let path = require('path')
const webpack = require('webpack')
module.exports = {
  /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     */
  // 基本路径
  publicPath: process.env.NODE_ENV === '/',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('api', path.resolve('./src/api/index.js'))
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      api: 'api'
    }])
  },
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
        // plugins: [require('postcss-px2rem')({
        //   remUnit: 75
        // })]
      }
    }
  },
}
