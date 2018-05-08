const merge = require('webpack-merge');
const webapck = require('webpack');
const base = require('./base');


module.exports = merge(base, {
    mode: "development"
});
