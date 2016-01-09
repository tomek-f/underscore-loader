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

// webpack settings (defaults)
{
  underscoreTemplateLoader: {
    minify: false,
    minifierOptions: {
      removeComments: true,
      collapseWhitespace: true,
      conservativeCollapse: true
    },
    templateOptions: {
      // escape: /<%-([\s\S]+?)%>/g,
      // interpolate: /<%=([\s\S]+?)%>/g,
      // evaluate: /<%([\s\S]+?)%>/g
    }
  }
}
```
