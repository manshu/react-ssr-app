const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform Webpack, we are buidling bundle for NodeJS rather than for the browser.

    target: 'node',

    // Tell webpack the root file for our server application.

    entry: './src/index.js',

    // Tell webpack where to output the fil that is generated.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);