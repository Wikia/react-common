Add an error boundary to any component

## Usage

```js static
import withErrorBoundary from '@react-common/hocs/withErrorBoundary';

const Component = props => (<div> Test </div>);
const ComponentWithErrorBoundary = withErrorBoundary(Component, 'RequiredBoundaryName');

// Usage
<ComponentWithErrorBoundary />
```

Custom Fallback 

```js static
import withErrorBoundary from '@react-common/hocs/withErrorBoundary';

const Component = props => (<div> Test </div>);
const AlternateFallBack = props => (<div> Alternate error message </div>);
const ComponentWithErrorBoundary = withErrorBoundary(Component, 'RequiredBoundaryName', AlternateFallback);

// Usage
<ComponentWithErrorBoundary />
```
