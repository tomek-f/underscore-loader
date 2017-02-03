# underscore-loader

> Webpack loader for pre-compiled Underscore/Lodash templates with HTML minification

* template is compliled with [lodash.template](https://www.npmjs.com/package/lodash.template)
* template can be minified by [html-minifier](https://www.npmjs.com/package/html-minifier) - set `minify` to `true` (and twick `minifierOptions`)

## options (defaults)

```javascript
{
  underscoreTemplateLoader: {
    engine: 'lodash',
    engineFull: null,
    minify: true,
    minifierOptions: {
      removeComments: true,
      collapseWhitespace: true,
      conservativeCollapse: true
    },
    templateOptions: {}
  }
}
```

### `engine`

* value to set in `'var _ = require(\'' + engine + '\');'` in the template output
* unused if `engineFull` is not `null`
* `lodash` is default, change it to `underscore` or `some-other-engine`
* see [setting template engine](#setting-template-engine) for more examples

### `engineFull`

* value to set (eg. `engineFull: 'var _ = require('lodash');'`) in the template output
* you can change it to sth else: `'engineFull: var trololo = require('some-other-engine');'` or empty string
* recommended value: `engineFull: 'var _ = { escape: require(\'lodash.escape\') };'`
* see [setting template engine](#setting-template-engine) for more examples

### `minify`

* default is `true`
* uses [html-minifier](https://www.npmjs.com/package/html-minifier)

### `minifierOptions`

* minify options - [html-minifier options](https://www.npmjs.com/package/html-minifier#options-quick-reference)

### `templateOptions`

* template options - [lodash documentation](https://lodash.com/docs#template)

## setting template engine

* change `lodash` to sth else (eg. `engine: 'undercore'`)
* set underscore/lodash/other-module dependency in `package.json`
* escaping needs escape method: `engineFull: 'var _ = { escape: require(\'lodash.escape\') };'` (THIS IS RECOMMENDED!!!)
* if you don't use any logic in your templates, you can pass empty string (`engineFull: ''`)
* if you don't need escape method, you can change var name and use it instead of `_` in template: `engineFull: 'var foo = require()'`
* you can use your own module as template engine (`engine: '../js/tplEngine'`), path is relative to template, use absolute path or resolve if your templates have different relative path to your module

### example of custom module in string

THIS IS RECOMMENDED SETUP.

```javascript
{
  engineFull: 'var _ = { escape: require(\'lodash.escape\') };'
}
```

or (NOT RECOMMENDED)

```javascript
{
  engineFull: 'var _ = require(\'customModulePath\');'
}
```

### example of custom module - forEach heaven :)

```javascript
module.exports = {
  forEachArr: Function.prototype.call.bind(Array.prototype.forEach),
  forEach: require('lodash.foreach'),
  each: $.each,
  escape: require('lodash.escape')
};
```

### custom module's path examples (recommended)

[View on github](https://github.com/tomek-f/underscore-loader/blob/master/customModulesPath.md).

## changelog

[View on github](https://github.com/tomek-f/underscore-loader/blob/master/changelog.md).
