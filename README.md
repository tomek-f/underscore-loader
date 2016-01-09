# underscore-loader

> Underscore/Lodash template loader for webpack

```javascript
// loader query
{ test: /\.tpl$/, loader: 'underscore-loader?data=hello' }
{
    test: /\.tpl$/,
    loader: 'underscore-loader',
    query: { data: 'hello' }
}

// webpack settings
{
  underscoreTemplateLoader: {
    engine: 'lodash',
    tplSettings: {
      escape: /\{\{([^{].*?)\}\}/gm,
      interpolate: /\{\{\{(.+?)\}\}\}/gm,
      evaluate: /\{\%(.+?)\%\}/g
    }
  }
}
```
