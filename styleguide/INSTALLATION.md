### 1. Add it to your project
| [Yarn](https://yarnpkg.com/en/) | [NPM](https://www.npmjs.com/) |
| --- | --- |
| `yarn add Wikia/react-design-system` | `npm install --save Wikia/react-design-system` |

### 2. Use it in the code
```js static
import {Button, VideoPlayIcon} from '@Wikia/react-design-system';
```

## Requirements
The only requirement is Webpack configuration capable of transforming Babel code and including SCSS files:
```json
- babel
- babel-plugin-transform-object-rest-spread
- babel-preset-env
- babel-preset-react
- node-sass
- postcss + autoprefixer
- react
- webpack
```
