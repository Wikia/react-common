### 1. Add it to your project
| [Yarn](https://yarnpkg.com/en/) | [NPM](https://www.npmjs.com/) |
| --- | --- |
| `yarn add wikia/react-design-system` | `npm install --save wikia/react-design-system` |

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
