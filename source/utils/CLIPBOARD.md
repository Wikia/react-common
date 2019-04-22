The `utils/copyToClipboardOnClick.js` utility can copy any string to the users clipboard if it coincides with a click.  

Usage:

```js static
import copyToClipboardOnClick from '@wikia/react-common/utils/copyToClipboardOnClick';

function Component() {
    return <div onClick={() => copyToClipboardOnClick('string-to-copy')} /> 
}
```

