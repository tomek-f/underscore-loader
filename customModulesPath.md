# Engine paths

## same relative path for every module

```javascript
{
  engine: '../js/tplEngine'
}
// or
{
  engineFull: 'var _ = require(\'../js/tplEngine\');'
}
```

## absolute path

```javascript
{
  engine: '/home/johndoe/Workspace/project/src/js/tplEngine'
}
// or (in node)
{
  engine: process.cwd() + '/src/js/tplEngine'
}
// or
{
  engineFull: 'var _ = require(\'/home/johndoe/Workspace/project/src/js/tplEngine\');'
}
// or (in node)
{
  engineFull: 'var _ = require(\'' + process.cwd() + '/src/js/tplEngine\');'
}
```

## resolve (same relative path)

in loader options (webpack config):

```javascript
{
  engine: 'tplEngine'
}
// or
{
  engineFull: 'var _ = require(\'tplEngine\');'
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
  engine: 'tplEngine'
}
// or
{
  engineFull: 'var _ = require(\'tplEngine\');'
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
