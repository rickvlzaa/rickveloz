const path = require('path');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    context: path.resolve(__dirname, '../..'),
    entry: {
        server: './src/server/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../../build'),
        filename: '[name].bundle.js'
    },
    node: {
        __filename: true,
        __dirname: true
    },
    resolve: {
        mainFiles: ['index'],
        extensions: ['.js']
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new Dotenv()
    ]
}