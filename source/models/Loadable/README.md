`Loadable` is a simple helper `Model` that's intended to keep a loading state and provide an API similar to [Finite-state Machine](https://en.wikipedia.org/wiki/Finite-state_machine).

The `Loadable`'s state can be in one of four different states:

- __Uninitialized__ (the default, initial state)
- __In Progress__
- __Completed__
- __Error__

### Typical usage

Usually the `Loadable` will start as uninitialized, after that it will get switched to __In Progress__ and either __Completed__ or __Error__ state.

- (successful loading) __Uninitialized__ -> __In Progress__ -> __Completed__
- (unsuccessful loading) __Uninitialized__ -> __In Progress__ -> __Error__

### APIs for reading state

- `Loadable.isLoadingUninitialized()` - returns `true` is the current state is __Uninitialized__
- `Loadable.isLoadingInProgress()` - returns `true` is the current state is __In Progress__
- `Loadable.isLoadingCompleted()` - returns `true` is the current state is __Completed__
- `Loadable.isLoadingError()` - returns `true` is the current state is __Error__
- `Loadable.isLoadingFinished()` - returns `true` is the current state is either __Completed__ or __Error__ (useful in checking if any loading action has been finished)

### APIs for writing the state

- `Loadable.withLoadingInProgress()` - returns new instance with state set to __In Progress__
- `Loadable.withLoadingCompleted()` - returns new instance with state set to __Completed__
- `Loadable.withLoadingError()` - returns new instance with state set to __Error__
