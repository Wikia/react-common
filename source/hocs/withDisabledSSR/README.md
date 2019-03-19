Only render a component on the browser


## Usage

```js static
import withDisabledSSR from '@react-common/hocs/withDisabledSSR';

const Component = props => (<div> ...spinner </div>)
const ComponentWithDisabledSSR = withDisabledSSR(Component);

// Usage
<ComponentWithDisabledSSR />
```


