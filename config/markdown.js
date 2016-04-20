'use strict'

const markdown = require('metalsmith-markdown')

module.exports = markdown({
  gfm: true,
  tables: true
})
