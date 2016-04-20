'use strict'

const moment = require('moment'),
  define = require('metalsmith-define')

module.exports = define({
  blog: {
    title: 'nodejs.rs',
    description: 'This is just a temporary description'
  },
  owner: {
    name: 'JS Belgrade',
    email: 'jsbelgradeorg@gmail.com'
  },
  moment: moment
})
