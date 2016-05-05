'use strict'

const collections = require('metalsmith-collections')

module.exports = collections({
  events: {
    sortBy: 'date',
    reverse: true
  }
})
