# @Wikia/react-common

[![Travis](https://img.shields.io/travis/Wikia/react-common/master.svg?style=flat-square)](https://travis-ci.org/Wikia/react-common)
[![Release](https://img.shields.io/github/package-json/v/Wikia/react-common.svg?style=flat-square)](https://github.com/Wikia/react-common/releases)

Wikia's reusable React parts.

## Live site / documentation
[https://wikia.github.io/react-common/](https://wikia.github.io/react-common/)

## Dependencies
- `i18next` and `react-i18next` are listed as `peerDependency` to make sure single instance of `i18next` is used.
So far they're included in `GlobalNav` and `GlobalFooter` components so if you're not using them you can omit warnings.
