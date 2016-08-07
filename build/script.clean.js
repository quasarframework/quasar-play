var
  shell = require('shelljs')
  ,path = require('path')
  ,config = require('../config')

shell.rm('-rf', path.resolve(__dirname, '../dist'))
console.log(' Cleaned build artifacts.\n')
