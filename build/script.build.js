
var
  shell = require('shelljs'),
  path = require('path'),
  config = require('../config'),
  platform = require('./platform'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.prod.conf'),
  targetPath = path.join(__dirname, '../dist')

process.env.NODE_ENV = 'production'
console.log(' Built files are meant to be served over an HTTP server.')
console.log(' Opening index.html over file:// won\'t work.\n')

require('./script.clean.js')
console.log(' Building Quasar App with "' + platform.theme + '" theme...')

shell.mkdir('-p', targetPath)
shell.cp('-R', 'src/statics', targetPath)

webpack(webpackConfig, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
