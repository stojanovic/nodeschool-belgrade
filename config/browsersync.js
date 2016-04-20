'use strict'

const browserSync = require('metalsmith-browser-sync')

module.exports = browserSync({
  server: 'dist',
  files:  [
    'src/**/*',
    'layouts/**/*.html'
  ]
})
