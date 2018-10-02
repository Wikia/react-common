const babelConfig = require('./babel.config');

module.exports = {
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
                test: /node_modules\/design-system\/dist\/svg\/sprite\.svg$/,
                loader: 'raw-loader',
            },
        ],
    },
};
