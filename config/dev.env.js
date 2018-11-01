'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ROOT: '"https://www.dadan299.com"'
  API_ROOT: '"http://www.zarbao.com"'
})
