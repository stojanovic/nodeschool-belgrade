'use strict'

const layouts = require('metalsmith-layouts')

module.exports = layouts({
  // Use handlebars as a view engine
  engine:    'handlebars',
  // Set paths for layouts and partials
  directory: 'layouts',
  partials:  'layouts/partials',
  // And set a pattern for layout files
  pattern:   '**/*.{md,html}'
})
