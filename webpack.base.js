module.exports = {
    // Tell webpack to run babel on everyfile it runs through

    mode: 'none',

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
        }],
    },

}