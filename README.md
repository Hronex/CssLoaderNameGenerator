# CssLoaderNameGenerator

[![npm version][npm-image]][npm-url]
[![license][license-image]][license-url]
[![downloads][downloads-image]][downloads-url]
[![language][github-language-image]][github-url]
[![github-issues][github-issues-image]][github-url]

#### Description

Generator of short names of css classes for css-loader.

#### Installation
```npm
npm install css-loader-name-generator --save-dev
```

#### Usage

```js
// In webpack config file
const CssLoaderNameGenerator = require('css-loader-name-generator');
// For example: 1 - minimal css class name length, 3 - maximal css class name length
const NameGenerator = new CssLoaderNameGenerator(1, 3);

// In css-loader section
{
    loader: 'css-loader',
    options: {
        modules: {
            getLocalIdent: NameGenerator.getLocalIdent,
            mode: 'local'
        }
    }
}
```

#### Example code output
![Code Example](https://github.com/Hronex/css-loader-name-generator/blob/main/src/code_example.png?raw=true)

[npm-image]: https://img.shields.io/npm/v/css-loader-name-generator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/css-loader-name-generator
[license-image]: https://img.shields.io/npm/l/css-loader-name-generator.svg?style=flat-square
[license-url]: https://npmjs.org/package/css-loader-name-generator
[downloads-image]: http://img.shields.io/npm/dm/css-loader-name-generator.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/css-loader-name-generator
[github-language-image]: https://img.shields.io/github/languages/top/Hronex/cssLoaderNameGenerator?style=flat-square
[github-issues-image]: https://img.shields.io/github/issues/Hronex/cssLoaderNameGenerator?style=flat-square
[github-url]: https://github.com/Hronex/cssLoaderNameGenerator