## General guidelines
- ES6 React components with [`prop-types`](https://github.com/facebook/prop-types) saved in `.js` file.
- general [Fandom's JavaScript](https://github.com/Wikia/eslint-config-fandom) rules apply (with the exception of whitespaces, check [`.editorconfig`](https://github.com/Wikia/react-design-system/blob/master/.editorconfig) file)
- Use function syntax if possible, use nesting and flat files.
- 100% coverage and no regressions
- use [Jest](https://facebook.github.io/jest/) as a general testing framework and for testing component's rendering
- use [Enzyme](https://github.com/airbnb/enzyme) for testing interactions
- use [Sinon](http://sinonjs.org/) for testing callbacks

## Step-by-step guide
0. Assuming the new component's name is `ComponentA` all it's files will be in `/src/components/ComponentA/` directory.
1. Create component in `ComponentA/index.js`.
2. Add component to `/src/index.js`.
3. Add component to `/components.json`.
4. (optionally) create styles in `ComponentA/styles.s?css` and import them in `ComponentA/index.js`.
5. Document the usage and props in JSDocs in `ComponentA/index.js`.
6. Add example or examples in `ComponentA/README.md`.
7. Add unit test in `ComponentA/index.spec.js`, aim for 100% coverage and all the test cases.
8. Create new Pull Request.
9. Code will be merged to `master` only if there are no regressions and after a successful CR.
10. When the code is merged to `master`, release new version of the styleguide.

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
