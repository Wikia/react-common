Add an error boundary to any component. By default every error will be sent to the remote log.

```js static
withErrorBoundary(Component, options);
```

The `options` param is optional and can have the following:

* `options.name` - Boundary's name; this will be used in `console.log` and will be sent to remote log
  **NOTE**: By default it's equal to `Component.name` (class name of the `Component` HoC param)
* `options.fallbackComponent` - either a component, a function that returns a component or `null` if there should be no fallback
* `options.skipLog` - if `false` the remote log will not be used; useful for developing/debugging local code
* `options.appName` - Front-End application's name; this is sent to remote log
* `options.appVersion` - Front-End application's verion; this is sent to remote log

**NOTE**: This component requires `styled-components` for displaying the default fallback Component.
Alternatively the `options.fallbackComponent` should be used to provide custom fallback or to disable this feature completely.

## Examples

Very basic usage:
```js static
import withErrorBoundary from '@react-common/hocs/withErrorBoundary';

const Component = props => (<div> Test </div>);
const ComponentWithErrorBoundary = withErrorBoundary(Component);

// Usage
<ComponentWithErrorBoundary />
```

Options:

```js static
import withErrorBoundary from '@react-common/hocs/withErrorBoundary';

const Component = props => (<div> Test </div>);
const AlternateFallBack = props => (<div> Alternate error message </div>);
const ComponentWithErrorBoundary = withErrorBoundary(Component, {
    name: 'BoundaryName',
    fallbackComponent: AlternateFallback,
});

// Usage
<ComponentWithErrorBoundary />
```
