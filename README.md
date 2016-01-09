# underscore-loader

> Underscore/Lodash template loader for webpack

```javascript
// loader query
{ test: /\.tpl$/, loader: 'underscore-loader?data=hello' }
{
    test: /\.png$/,
    loader: 'underscore-loader',
    query: { data: 'hello' }
}

// webpack settings
 tplSettings: {
  escape: /\{\{([^{].*?)\}\}/gm,
  interpolate: /\{\{\{(.+?)\}\}\}/gm,
  evaluate: /\{\%(.+?)\%\}/g
}
```
