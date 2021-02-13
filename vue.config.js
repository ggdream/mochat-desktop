/* eslint-disable @typescript-eslint/camelcase */
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')


module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  productionSourceMap: false,
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new TerserPlugin({
              extractComments: true,
              terserOptions: {
                  compress: {
                      drop_console: true,
                      drop_debugger: true,
                      pure_funcs: ['console.log', 'console.warn', 'console.error']
                  }
              }
          }),
          new CompressionPlugin({
              filename: '[path][base].gz[query]',
              test: /\.(js|css)/i,
              algorithm: 'gzip',
              minRatio: 0.8,
              threshold: 1 << 10 * 16,
              deleteOriginalAssets: true
          })
        ]
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      webSecurity: false,
      enableRemoteModule: true,
      builderOptions: {
        extraResources: {
          from: './static/',
          to: './'
        },
        linux: {
          target: ['deb']
        }
      }
    }
  }
}
