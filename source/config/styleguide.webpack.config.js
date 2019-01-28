const babelConfig = require('./babel.config');

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: babelConfig,
                },
                {
                    test: /\.s?css$/,
                    loader: 'style-loader!css-loader!sass-loader',
                },
                {
                    test: /\.svg$/,
                    exclude: /node_modules\/design-system\/dist\/svg\/sprite\.svg$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: babelConfig,
                        }, {
                            loader: 'react-svg-loader',
                            options: {
                                svgo: {
                                    plugins: [
                                        {
                                            cleanupIDs: {
                                                remove: false,
                                                minify: false,
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                },
                {
                    test: /node_modules\/design-system\/dist\/svg\/sprite\.svg$/,
                    loader: 'raw-loader',
                },
            ],
        },
    };
};
