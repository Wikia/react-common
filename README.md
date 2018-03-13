# react-design-system
![Travis](https://img.shields.io/travis/Wikia/react-design-system/master.svg?style=flat-square)
![Package](https://img.shields.io/github/release/Wikia/react-design-system.svg?style=flat-square)
![Release](https://img.shields.io/github/package-json/v/Wikia/react-design-system.svg?style=flat-square)
![Commits](https://img.shields.io/github/commits-since/Wikia/react-design-system/latest.svg?style=flat-square)
[![Webpage](https://img.shields.io/badge/Visit-webpage-green.svg?style=flat-square)](https://wikia.github.io/react-design-system/)
[![Repository](https://img.shields.io/badge/Visit-GitHub-green.svg?style=flat-square)](https://github.com/Wikia/react-design-system/)

Reusable React components based on https://github.com/Wikia/design-system

**WARNING**: This project is in *very* early stage of the development. Be aware!

### Install
```js static
> yarn add react-design-system
```

### Requirements
The only requirement is Webpack configuration capable of transforming Babel code and including SCSS files:
```json
- autoprefixer
- babel
- babel-plugin-transform-object-rest-spread
- babel-preset-env
- babel-preset-react
- node-sass
- react
- webpack
```

## Contribution
- ES6 React components with [`prop-types`](https://github.com/facebook/prop-types) saved in `.js` file.
- general [Fandom's JavaScript](https://github.com/Wikia/eslint-config-fandom) rules apply (with the exception of whitespaces, check [`.editorconfig`](https://github.com/Wikia/react-design-system/blob/master/.editorconfig) file)
- Use function syntax if possible, use nesting and flat files.
- 100% jest coverage and no regressions

### Tests
The easiest way is to run the full suite:
```js static
> yarn test
```
It will run `eslint` and `jest`, and will output `jest --coverage` report.

There's a command for watching tests:
```js static
> yarn test:watch
```

**NOTE**: You can read more about Jest here: https://facebook.github.io/jest/


## TODO (before version 1.0.0)
- Finish documentation
