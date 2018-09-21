## General guidelines

- ES6 React components with [`prop-types`](https://github.com/facebook/prop-types) saved in `.js` file.
- Use function syntax if possible, use nesting and flat files.
- 100% lint and coverage and no regressions
- use [Jest](https://facebook.github.io/jest/) as a general testing framework and for testing component's rendering
- use [Enzyme](https://github.com/airbnb/enzyme) for testing interactions
- use [Sinon](http://sinonjs.org/) for testing callbacks

## Step-by-step guide

1. Assuming the new component's name is `ComponentA` all it's files will be in `/src/components/ComponentA/` directory.
2. Create component in `ComponentA/index.js`.
3. Add component to `/src/index.js`.
4. Add component to `/components.json`.
5. (optionally) create styles in `ComponentA/styles.s?css` and import them in `ComponentA/index.js`.
6. Document the usage and props in JSDocs in `ComponentA/index.js`.
7. Add example or examples in `ComponentA/README.md`.
8. Add unit test in `ComponentA/index.spec.js`, aim for 100% coverage and all the test cases.
9. Create new Pull Request.
10. Code will be merged to `master` only if there are no regressions and after a successful CR.
11. When the code is merged to `master`, release new version of the styleguide.

## HOCS

1. Higher order components (hoc) can be added by following the guide

Note: The one difference will be to use `js static` in the readme to prevent rendering as styleguidist doesn't have access to the hoc


## Development server

```js static
> yarn dev
```

## Tests

The easiest way is to run the full suite:

```js static
> yarn test
```

It will run `eslint` and `jest`, and will output `jest --coverage` report.

There's a command for watching tests:

```js static
> yarn test:watch
```

## Release

After PR is merged into `master` branch create new release. You should use [SemVer](http://semver.org/) using one of the following commands.

The script will automatically pull newest `master` branch, build the documentation, create new release version in the `package.json`, create GitHub tag and push this tag to GitHub.

### Usual release; bugfixes, no new features and no breaking changes

```js static
> yarn release
```

### New features, but no breaking changes

```js static
> yarn release:minor
```

### Breaking changes, regardless how small

```js static
> yarn release:major
```
