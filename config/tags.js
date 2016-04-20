'use strict'

const tags = require('metalsmith-tags')

module.exorts = tags({
  handle: 'tags',
  path:'topics/:tag/index.html',
  layout:'/page.html',
  sortBy: 'date',
  reverse: true,
  skipMetadata: false
})
