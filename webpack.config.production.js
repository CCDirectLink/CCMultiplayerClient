const path = require('path');
const webpack = require('webpack');

/**
 * @type {webpack.Configuration}
 */
const config = {
    mode: 'production',
    entry: ['core-js/fn/promise', './src/main.ts'],
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'mod.js',
        path: path.resolve(__dirname, 'dist')
    }
};

module.exports = config;