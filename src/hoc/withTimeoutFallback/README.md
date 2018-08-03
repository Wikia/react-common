Defaults:
```js
const Spinner = props => (<div> ...spinner </div>)
const SpinnerWithTimeout = withTimeoutFallback(Spinner);

// Usage
<SpinnerWithTimeout />
```

Custom Fallback and Timeout:
```js
const Spinner = props => (<div> ...spinner </div>)
const SpinnerWithTimeout withTimeoutFallback(Spinner);
const options = {timeout: 10000, FallbackComponent: Fallback};
const SpinnerWithTimeout = withTimeoutFallback(Spinner, options);

// Usage
<SpinnerWithTimeout />
```
