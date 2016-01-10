# underscore-loader

> Underscore/Lodash template loader for webpack

## pass template options - [lodash documentation](https://lodash.com/docs#template)

### method #1
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
```

### method #2

```javascript
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

### method #3 (webpack config)

```javascript
{
  underscoreTemplateLoader: {
    templateOptions: {
      variable: 'data'
    }
  }
}
```

## defaults

```javascript
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
