const path = require('path');
module.exports = {
    context: path.resolve(__dirname, '../..'),
    entry: {
        app: ['./src/client/index.js']
    },
    output: {
        path: path.resolve(__dirname, '../../build', 'public')
    },
    resolve: {
        mainFiles: ['index'],
        extensions: ['.js']
    },
    target: 'web',
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
    ]
}