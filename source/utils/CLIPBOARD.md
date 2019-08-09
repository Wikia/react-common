The `utils/copyToClipboard.js` utility can copy any string to the users clipboard if it coincides with a click.  

Usage:

```js static
import copyToClipboard from '@wikia/react-common/utils/copyToClipboard';

function Component() {
    return <div onClick={() => copyToClipboard('string-to-copy')} /> 
}
```

