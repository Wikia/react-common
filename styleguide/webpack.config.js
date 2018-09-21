module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: ['@babel/plugin-syntax-object-rest-spread'],
                    presets: ['@babel/preset-react', [
                        '@babel/preset-env',
                        {
                            targets: {
                                browsers: [
                                    'last 5 versions',
                                    '> 2%',
                                    'IE 11',
                                    'IE 10',
                                ],
                            },
                        },
                    ]],
                },
            },
            {
                test: /\.s?css$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
            {
                test: /node_modules\/design-system\/dist\/svg\/sprite\.svg$/,
                loader: 'raw-loader',
            },
        ],
    },
};
