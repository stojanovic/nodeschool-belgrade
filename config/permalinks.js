'use strict'

const permalinks  = require('metalsmith-permalinks')

module.exports = permalinks({
  // date: 'YYYY/MM',
  // relative: true,
  pattern: ':page'
})
