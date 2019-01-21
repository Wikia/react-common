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
                            loader: 'react-svg-loader',
                            options: {
                                svgo: {
                                    pretty: true,
                                    jsx: true,
                                    plugins: [
                                        {
                                            cleanupIDs: {
                                                remove: false,
                                                prefix: `id-${randomStr}-`,
                                                minify: true,
                                            },
                                        },
                                        { collapseGroups: true },
                                        { removeDesc: true },
                                        { removeDoctype: true },
                                        { removeTitle: true },
                                        { removeUselessDefs: true },
                                        { removeUselessStrokeAndFill: true },
                                        { removeXMLNS: true },
                                        { removeXMLProcInst: true },
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
