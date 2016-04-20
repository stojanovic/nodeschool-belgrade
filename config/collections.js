'use strict'

const collections = require('metalsmith-collections')

module.exports = collections({
  posts: {
    sortBy: 'date',
    reverse: true
  }
})
