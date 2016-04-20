'use strict'

const sass = require('metalsmith-sass')

module.exports = sass({
  file: 'sass/index.scss',
  outputDir: 'assets/css/'
})
