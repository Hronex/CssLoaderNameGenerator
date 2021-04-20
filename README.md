# Css Loader Name Generator

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

#### Additional
Also you can use generator out of css-loader context.

```js
const shortName = NameGenerator.getRandomName('my_module_name');
```

#### Example code output
```css
.T {
    background: white;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    color: #666666;
    font-size: 13px;
    font-weight: 100;
    line-height: 31px;
    padding: 0 12px;
}
.T:focus {
    outline: none;
    border-color: #3380cc; 
}
.T.o {
    display: inline-block;
}
.T.Z {
    background: whitesmoke;
}
.T.d {
    -moz-appearance: textfield; 
}
.T.d::-webkit-outer-spin-button,
.T.d::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}
```

[npm-image]: https://img.shields.io/npm/v/css-loader-name-generator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/css-loader-name-generator
[license-image]: https://img.shields.io/npm/l/css-loader-name-generator.svg?style=flat-square
[license-url]: https://npmjs.org/package/css-loader-name-generator
[downloads-image]: http://img.shields.io/npm/dm/css-loader-name-generator.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/css-loader-name-generator
[github-language-image]: https://img.shields.io/github/languages/top/Hronex/cssLoaderNameGenerator?style=flat-square
[github-issues-image]: https://img.shields.io/github/issues/Hronex/cssLoaderNameGenerator?style=flat-square
[github-url]: https://github.com/Hronex/cssLoaderNameGenerator