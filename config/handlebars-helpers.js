'use strict'

const Handlebars = require('handlebars'),
      _ = require('lodash')

// Handlebars helpers
Handlebars.registerHelper('limit', function (arr, limit) {
  if (!_.isArray(arr))
    return []
  return arr.slice(0, limit)
})

Handlebars.registerHelper('nextEvents', function (arr, limit) {
  if (!_.isArray(arr))
    return []

  limit = limit || 1
  
  return _.sortBy(_.filter(arr, item => item.register), 'date').slice(0, limit)
})

Handlebars.registerHelper('pastEvents', function (arr, limit) {
  if (!_.isArray(arr))
    return []

  limit = limit || arr.length
  
  return _.sortBy(_.filter(arr, item => item.gallery), 'date').slice(-limit).reverse()
})

module.export = Handlebars
