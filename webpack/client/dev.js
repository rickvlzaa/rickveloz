const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.js');
const path = require('path');

module.exports = merge.strategy({'entry.app': 'prepend' })(base, {
    entry: {
        app: ['webpack-hot-middleware/client']
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    {
                        
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});