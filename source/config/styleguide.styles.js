module.exports = {
    theme: {
        maxWidth: '100%',
        sidebarWidth: 250,
        fontFamily: {
            base: 'Rubik, Helvetica, Arial, sans-serif',
            monospace: [
                'SF Mono',
                'Monaco',
                'Inconsolata',
                'Fira Code',
                'Fira Mono',
                'Droid Sans Mono',
                'Consolas',
                'Roboto Mono',
                'Source Code Pro',
                'monospace',
            ],
        },
        fontSize: {
            base: 14,
            text: 14,
            small: 12,
            h1: 36,
            h2: 24,
            h3: 18,
            h4: 16,
            h5: 15,
            h6: 15,
        },
        color: {
            link: '#00acac',
            linkHover: '#008989',
            sidebarBackground: '#00acac',
        },
    },
    styles: {
        StyleGuide: {
            root: {
                'text-rendering': 'optimizeLegibility',
                '-moz-osx-font-smoothing': 'grayscale',
                '-webkit-font-smoothing': 'antialiased',
            },
            '@global body': {
                fontFamily: 'Rubik, Helvetica, Arial, sans-serif',
            },
            logo: {
                border: 'none',
                paddingBottom: 0,
            },
        },
        Logo: {
            logo: {
                color: '#fff',
                fontSize: 20,
            },
        },
        Playground: {
            preview: {
                border: 0,
                padding: 0,
            },
        },
        ComponentsList: {
            list: {
                '& ul': {
                    paddingLeft: 0,
                },
            },
            item: {
                '& a': {
                    color: ['rgba(255, 255, 255, 0.9)', '!important'],
                    fontWeight: [500, '!important'],
                    cursor: ['pointer', '!important'],
                    '&:hover': {
                        textDecoration: 'underline',
                        color: ['#fff', '!important'],
                    },
                },
            },
            heading: {
                fontSize: ['18px', '!important'],
                fontWeight: [600, '!important'],
                color: ['#fff', '!important'],
            },
        },
    },
};
