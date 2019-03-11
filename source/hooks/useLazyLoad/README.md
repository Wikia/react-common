Custom hook that calls given handler when element will be scrolled near (100px) it's bottom. 

Returns an element to be used as a ref for scrollable element.

## Usage

```js static
import useLazyLoad from '@react-common/hooks/useLazyLoad';

// Usage
const Component = ({ handler }) => {
    const ref = useLazyLoad(handler);

    return (
        <div ref={ref}>
            ...
        </div>
    );
};
```
