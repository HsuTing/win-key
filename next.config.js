const { i18n } = require('./next-i18next.config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // i18n,
  output: 'export',
  assetPrefix: isProd ? '/win-key/' : '',
  basePath: isProd ? '/win-key' : '',
}
