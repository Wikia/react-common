
Hook to create a React Portal.

Automatically handles creating and tearing-down the root elements (no SRR makes this trivial), so there is no need to ensure the parent target already exists.

## Usage

```js static
import usePortal from '@react-common/hooks/usePortal';

function Component({ id, children }) {
    const target = usePortal(id, [id]);
    return createPortal(children, target);
}
```
