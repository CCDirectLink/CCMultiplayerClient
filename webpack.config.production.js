const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * @type {webpack.Configuration}
 */
const config = {
    mode: 'production',
    entry: './src/main.ts',
    target: 'node-webkit',
    plugins: [
        new CopyWebpackPlugin([{
            context: 'assets/',
            from: '**',
            to: '[path][name].[ext]'
        }])
    ],
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