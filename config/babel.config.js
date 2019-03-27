module.exports = {
    babelrc: false,
    exclude: 'node_modules/**',
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-default-from',
        'babel-plugin-styled-components'
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
