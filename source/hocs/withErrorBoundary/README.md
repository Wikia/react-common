Add an error boundary to any component. By default every error will be sent to the remote log.

```js static
withErrorBoundary(Component, options);
```

The `options` param is optional and can have the following:

* `options.name` - Boundary's name; this will be used in `console.log` and will be sent to remote log
  **NOTE**: By default it's equal to `Component.name` (class name of the `Component` HoC param)
* `options.fallback` - a component that will be displayed if there's an error
* `options.skipLog` - if `true` the remote log will not be used; useful for developing/debugging local code
* `options.appName` - Front-End application's name; this is sent to remote log
* `options.appVersion` - Front-End application's verion; this is sent to remote log

There's handy component for fallback - `StyledErrorDisplayingContent`;

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
const FallbackComponent = () => (<div> Alternate error message </div>);
const ComponentWithErrorBoundary = withErrorBoundary(Component, {
    name: 'BoundaryName',
    fallback: FallbackComponent,
});

// Usage
<ComponentWithErrorBoundary />
```
