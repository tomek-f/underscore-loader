# underscore-loader

> Underscore/Lodash template loader for webpack

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

### method #2 (webpack config)

```javascript
{
  underscoreTemplateLoader: {
    templateOptions: {
      variable: 'data'
    }
  }
}
```
