### 1. Add it to your project
**This is not working yet, since the package wasn't published to npm, please use
GitHub repository for now**

| [Yarn](https://yarnpkg.com/en/) | [NPM](https://www.npmjs.com/) |
| --- | --- |
| `yarn add @wikia/react-design-system` | `npm install --save @wikia/react-design-system` |

### 2. Include CSS
Make sure you include the CSS in your styles.

```scss static
@include "~@wikia/react-design-system/dist/styles.css";
```

### 3. Use it in the code
```js static
import {Button, VideoPlayIcon} from '@wikia/react-design-system';
```
