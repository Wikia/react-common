module.exports = {
    babelrc: false,
    exclude: 'node_modules/**',
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-object-rest-spread',
    ],
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env', {
                targets: {
                    browsers: [
                        'last 2 versions',
                        '> 2%',
                        'IE 11',
                    ],
                },
            },
        ],
    ],
};
