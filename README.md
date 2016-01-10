# underscore-loader

> Underscore/Lodash template loader for webpack

* template is compliled with [lodash.template](https://www.npmjs.com/package/lodash.template)
* template can be minified by [html-minifier](https://www.npmjs.com/package/html-minifier) - set `minify` to `true`

## defaults

```javascript
// webpack settings (defaults)
{
  underscoreTemplateLoader: {
    engine: 'lodash',
    engineFull: null,
    minify: false,
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

* string to put in `'var _ = require(\'' + engine + '\');'` in module for template internal use
* unused if `engineFull` is not `null`
* `lodash` is default, change it to `underscore` or `some-other-engine`
* see [engine](#engine-1) form more

### `engineFull`

* full string to put `'var _ = require('lodash');'` in module for template internal use
* you can change it to sth else, even `'var trololo = require('some-other-engine');'`
* see [engine](#engine-1) form more

### `minify`

* default is `false`
* uses [html-minifier](https://www.npmjs.com/package/html-minifier)

### `minifierOptions`

* minify options - [html-minifier options](https://www.npmjs.com/package/html-minifier#options-quick-reference)

### `templateOptions`

* template options - [lodash documentation](https://lodash.com/docs#template)

## setting engine

* TODO cases

## pass template options - [lodash documentation](https://lodash.com/docs#template)

### method #1 (webpack config loader)

```javascript
{
  module: {
    loaders: [
      {
        test: /\.tpl$/,
        loader: 'underscore-loader?variable=data'
      }
    ]
  }
}
// or
{
  module: {
    loaders: [
      {
        test: /\.tpl$/,
        loader: 'underscore-loader',
        query: {
          variable: 'data'
        }
      }
    ]
  }
}
```

### method #2 (webpack config `underscoreTemplateLoader.templateOptions`)

```javascript
{
  underscoreTemplateLoader: {
    templateOptions: { variable: 'data' }
  }
}
```
