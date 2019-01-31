# Contribution

## General guidelines

- ES6 React components with [`prop-types`](https://github.com/facebook/prop-types) saved in `.js` file.
- Use function syntax if possible, use nesting and flat files.
- 100% lint and coverage and no regressions
- use [Jest](https://facebook.github.io/jest/) as a general testing framework and for testing component's rendering
- use [Enzyme](https://github.com/airbnb/enzyme) for testing interactions
- use [Sinon](http://sinonjs.org/) for testing callbacks

## Step-by-step guide for components

1. Assuming the new component's name is `ComponentA` all it's files will be in `/source/components/ComponentA/` directory.
2. Create component in `ComponentA/index.js`.
3. Add component to `/src/index.js`.
4. Add component to `/config/styleguide.config.json`.
5. (optionally) create styles in `ComponentA/styles.s?css` and import them in `ComponentA/index.js`.
6. Document the usage and props in JSDocs in `ComponentA/index.js`.
7. Add example or examples in `ComponentA/README.md`.
8. Add unit test in `ComponentA/index.spec.js`, aim for 100% coverage and all the test cases.
9. Create new Pull Request.
10. Code will be merged to `master` only if there are no regressions and after a successful CR.
11. When the code is merged to `master`, release new version of the styleguide with one of the release commands.


### HOCS

1. Higher order components (hoc) can be added by following the guide

**Note**: The one difference will be to use `js static` in the readme to prevent rendering as styleguidist doesn't have access to the hoc

## Development server

```js static
> yarn dev
```

## Tests

The easiest way is to run the full suite:

```js static
> yarn ci
```

It will run linting (ESLint, Stylelint), Jest and will output coverage report.

### Watch

There's a command for watching Jest tests:

```js static
> yarn test:watch
```

## Build

Running the build is as simple as:

```js static
> yarn build
```

This will run few build commands in sequence:

1. Remove every generated file and directory from the root directory (equivalent of `yarn clean`).
2. Build the library outputting built ES5 files to the root (`yarn lib:build`).
3. Build the `docs/`  in the root directory; it contains the build styleguide that will appear on the GitHub pages (`yarn styleguide:build`).
4. Build the `package.json` in the root directory (`yarn package:build`).
5. Build the `README.md` in the root directory and in all auto generated directories (`yarn readme:build`).


## Release

After PR is merged into `master` branch create new release. You should use [SemVer](http://semver.org/) using one of the following commands.

The script will automatically pull newest `master` branch, build the documentation, create new release version in the `package.json`, create GitHub tag and push this tag to GitHub. After pushing the new tag it will publish the package to artifactory. 

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
