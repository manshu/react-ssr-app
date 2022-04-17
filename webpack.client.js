const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const dotenv = require('dotenv').config()

const config = {
    // Tell webpack the root file for our server application.
    entry: './src/client/client.js',

    // Tell webpack where to output the fil that is generated.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    }

};

module.exports = merge(baseConfig, config);