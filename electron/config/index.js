'use strict'

const path = require('path')

let config = {
  // Name of electron app
  // Will be used in production builds
  name: 'QuasarElectronApp',

  // Dev server port
  port: process.env.PORT || require('../../config').dev.port
}

if (process.env.NODE_ENV === 'production') {
  config.building = {
    // electron-packager options
    // Docs: https://simulatedgreg.gitbooks.io/electron-vue/content/docs/building_your_app.html
    name: config.name,

    // Electron version
    version: require('../node_modules/electron-prebuilt/package.json').version,
    arch: 'x64',
    asar: true,
    dir: path.join(__dirname, '../../dist'),
    icon: path.join(__dirname, '../icons/icon'),
    ignore: /\b(node_modules|src|icons)\b/,
    out: path.join(__dirname, '../dist'),
    overwrite: true,
    platform: process.env.PLATFORM_TARGET || 'all'
  }
}

module.exports = config
