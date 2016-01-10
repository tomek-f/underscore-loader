# underscore-loader

> Underscore/Lodash template loader for webpack

## pass template options - (see lodash documentation)[https://lodash.com/docs#template]

```javascript
// loader query - options for underscore/lodash
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
//
{
  test: /\.tpl$/,
  loader: 'underscore-loader',
  query: {
    variable: 'data'
  }
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
    templateOptions: {}
  }
}
```
