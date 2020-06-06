const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./config.base')

const devConf = {
    devtool: 'inline-source-map',
    cache: true,
}

module.exports = merge(base, devConf)