'use strict'

const metalsmith = require('metalsmith')
const ifThen = require('metalsmith-if'),
  argv = require('optimist').argv,
  ghpages = require('gh-pages'),
  path = require('path'),
  metadata = require('./config/metadata'),
  sass = require('./config/sass'),
  collections = require('./config/collections'),
  excerpts = require('metalsmith-excerpts'),
  layouts = require('./config/layouts'),
  permalinks = require('./config/permalinks'),
  markdown = require('./config/markdown'),
  browsersync = require('./config/browsersync'),
  drafts = require('metalsmith-drafts')

metalsmith(__dirname)
  .source('src')
  .use(metadata)
  .use(sass)
  .use(markdown)
  .use(drafts())
  .use(collections)
  .use(excerpts())
  .use(permalinks)
  .use(layouts)
  .use(ifThen(
    argv.watch,
    browsersync
  ))
  .destination('dist')
  .build(err => {
    if (err) throw err

    if (argv.build)
      ghpages.publish(path.join(__dirname, 'dist'), {
        message: 'chore(dist): auto-publish on Github pages'
      }, err => {
        if (err) throw err

        console.log('Website is published on GH pages branch!')
      })
  })
