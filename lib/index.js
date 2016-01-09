var template = require('lodash.template');
var merge = require('lodash.merge');
var loaderUtils = require('loader-utils');
var minify = require('html-minifier').minify;

var defaults = require('./defaults');

module.exports = function (source) {

  this.cacheable && this.cacheable();

  var queryOptions = loaderUtils.parseQuery(this.query);
  var config = merge({}, defaults, this.options.underscoreTemplateLoader,
    { templateOptions: queryOptions });
  var templateLocal;
  
  if (!config.engineFull) {
    config.engineFull = 'var _ = require(\'' + config.engine + '\');\n\n';
  }

  templateLocal =
    config.minify ? minify(source, config.minifierOptions) : source;
  templateLocal = template(templateLocal, config.templateOptions);

  return config.engineFull + 'module.exports = ' + templateLocal + ';\n';

};
