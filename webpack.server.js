const path = require('path');
module.exports = {
    // Inform Webpack, we are buidling bundle for NodeJS rather than for the browser.

    target: 'node',

    // Tell webpack the root file for our server application.

    entry: './src/index.js',

    // Tell webpack where to output the fil that is generated.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Tell webpack to run babel on everyfile it runs through

    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    'react',
                    'stage-0',
                    [
                        'env', { targets: { browser: ['last 2 versions'] } }
                    ]
                ]
            }
        }]
    }
};