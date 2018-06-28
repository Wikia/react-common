### 1. Add it to your project
**This is not working yet, since the package wasn't published to npm, please use
GitHub repository for now**
| [Yarn](https://yarnpkg.com/en/) | [NPM](https://www.npmjs.com/) |
| --- | --- |
| `yarn add @wikia/react-design-system` | `npm install --save @wikia/react-design-system` |

### 2. Use it in the code
```js static
import {Button, VideoPlayIcon} from '@wikia/react-design-system';
```

## Requirements
The only requirement is a Webpack configuration capable of transforming ES6 code and including SCSS files:
- `babel` (+plugins: `babel-preset-react`, `babel-preset-env` and `babel-plugin-transform-object-rest-spread`)
- `node-sass`
- `postcss` with `autoprefixer` plugin
- `react@16`
- `webpack@3`

### Webpack config
Ensure that your webpack config understands where this package is, and how to resolve node modules so that Wikia's `design-system` package can be found.

Both examples below are intended to be illustrative only, and assume that you're already doing transpilation of ES6 and SCSS sources in your project.

#### JavaScript Compilation
```js static
module: {
    rules: [
        {
            test: /\.js$/,  // along with whatever other extensions you're transpiling from ES6
            include: [
                // Your normal include paths here,
                path.resolve(__dirname, '../node_modules/@wikia/react-design-system'),
            ],
            // ... everything else
```

#### Module Resolution
```js static
resolve: {
    extensions: ['.js'],    // Along with whatever other extensions you're transpiling from ES6
    modules: [
        // Your normal module resolution here,
        'node_modules'
    ]
},
```
