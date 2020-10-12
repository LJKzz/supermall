module.exports = {
  lintOnSave: false,
  css: {
    extract: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },

  publicPath: './'
}
