Custom hook that will run a function once and only once, right after the first render of a component.

The first parameter is the callback. The second parameter (required) is a unique name for the callback.

## Usage example

```js static
import React, { useState } from 'react';
import useOnlyOnce from '@react-common/hooks/useOnlyOnce';

const MyComponent = () => {
    const [value, setValue] = useState(1);

    useOnlyOnce(() => {
        setValue(value + 1);
    }, 'incrementValue');

    return (
        <div>
            Value is {value} and it will never be higher than 2.
        </div>
    );
};
```
