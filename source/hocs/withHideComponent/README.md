Adds a `hide` prop logic to newly created component

## Usage

```js static
import withHideComponent from '@react-common/hocs/withHideComponent';

const Comp = props => (<div> test </div>)
const ComponentWithIsHidden = withTimeoutFallback(Spinner);

// Usage
<ComponentWithIsHidden hide/> // ComponentWithIsHidden will be hidden
<ComponentWithIsHidden /> // ComponentWithIsHidden will be visible
```
