# underscore-loader

> Webpack loader for pre-compiled Underscore/Lodash templates with HTML minification

* template is compliled with [lodash.template](https://www.npmjs.com/package/lodash.template)
* template are minified by [html-minifier](https://www.npmjs.com/package/html-minifier)

## Installation

```bash
$ npm install --save underscore-loader lodash.escape
```

## Options (defaults)

```javascript
{
  underscoreTemplateLoader: {
    engine: 'var _ = { escape: require(\'lodash.escape\') };',
    minify: true,
    minifierOptions: {
      removeComments: true,
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true
    },
    originalSource: true,
    templateOptions: {}
  }
}
```

### `engine`

* for full `lodash` set it to `var _ = require(\'lodash\');`
* for full `underscore` set it to `var _ = require(\'underscore\');`
* `lodash.escape` is default, change it to `lodash`, `underscore` or `some-other-engine`

### `minify`

* default is `true`
* uses [html-minifier](https://www.npmjs.com/package/html-minifier)

### `minifierOptions`

* minify options - [html-minifier options](https://www.npmjs.com/package/html-minifier#options-quick-reference)

### `originalSource`

* append original html in comment

### `templateOptions`

* template options - [lodash documentation](https://lodash.com/docs#template)

## Setting template engine

* set underscore/lodash/other-module dependency in `package.json`
* if you don't use any logic in your templates, you can pass empty string (`engine: ''`)

### Custom module's path examples (old README)

[View on github](https://github.com/tomek-f/underscore-loader/blob/master/customModulesPath.md).

## Changelog

[View on github](https://github.com/tomek-f/underscore-loader/blob/master/changelog.md).
