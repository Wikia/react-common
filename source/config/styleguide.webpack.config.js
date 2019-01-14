const babelConfig = require('./babel.config');

module.exports = () => {
    /**
     * DS SVGs have "optimized"/minimized (broken) IDs
     */
    const randomStr = (Math.random() * 1e32).toString(36);

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
                                                prefix: `id-${randomStr}-`,
                                                minify: true,
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
