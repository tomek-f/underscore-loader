# custom module's path examples (not verified)

## forEach heaven

```javascript
module.exports = {
  forEachArr: Function.prototype.call.bind(Array.prototype.forEach),
  forEach: require('lodash.foreach'),
  each: $.each,
  escape: require('lodash.escape')
};
```

## same relative path for every module

```javascript
{
  engine: 'var _ = require(\'../js/tplEngine\');'
}
```

## absolute path

```javascript
{
  engine: 'var _ = require(\'/home/johndoe/Workspace/project/src/js/tplEngine\');'
}
// or (in node)
{
  engine: 'var _ = require(\'' + process.cwd() + '/src/js/tplEngine\');'
}
```

## resolve (same relative path)

in loader options (webpack config):

```javascript
{
  engine: 'var _ = require(\'tplEngine\');'
}
```

in webpack config resolve object:

```javascript
{
  resolve: {
    alias: {
      tplEngine: '../js/templateLoaderEngine.js'
    }
  }
}
```

## resolve (absolute path)

in loader options (webpack config):

```javascript
{
  engine: 'var _ = require(\'tplEngine\');'
}
```

in webpack config resolve object:

```javascript
{
  resolve: {
    alias: {
      tplEngine: '/home/johndoe/Workspace/project/src/js/tplEngine.js'
    }
  }
}
// tip: use path.resolve(__dirname), process.cwd(), ...
```
