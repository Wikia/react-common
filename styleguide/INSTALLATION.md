### 1. Add it to your project
**This is not working yet, since the package wasn't published to npm, please use
GitHub repository for now**

| [Yarn](https://yarnpkg.com/en/) | [NPM](https://www.npmjs.com/) |
| --- | --- |
| `yarn add @wikia/react-design-system` | `npm install --save @wikia/react-design-system` |

### 2. Include CSS
Make sure you include the CSS in your styles.

```scss static
@import "~@wikia/react-design-system/dist/index.css";
```

### 3. Use it in the code
```js static
import {Button, VideoPlayIcon} from '@wikia/react-design-system';
```

### 4. Large imports
Due to size of the DS SVG sprite, both `<IconSprite />` and `<Icon />` have been removed from the default library output and were put in the `icons` file.

In order to use them you need to include the following:

#### JS
```js static
import {Icon, IconSprite} from '@wikia/react-design-system/dist/icons';
```

#### CSS
```scss static
@include "~@wikia/react-design-system/dist/icons.css";
```
