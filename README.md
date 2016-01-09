# underscore-loader

> Underscore/Lodash template loader for webpack

```javascript
// loader query - options for underscore/lodash
{ test: /\.tpl$/, loader: 'underscore-loader?variable=data' }
{
    test: /\.tpl$/,
    loader: 'underscore-loader',
    query: { variable: 'data' }
}

// webpack settings (defaults)
{
  underscoreTemplateLoader: {
    engine: 'lodash', // or: 'underscore', require('z'), { forEach: require('lodash.foreach'), escape: require('lodash.escape') } - remember to put deps in your package.json
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
