var template = require('lodash.template');
var merge = require('lodash.merge');
var loaderUtils = require('loader-utils');
var minify = require('html-minifier').minify;

var defaults = require('./defaults');

module.exports = function (source) {

  this.cacheable && this.cacheable();

  var queryOptions = loaderUtils.parseQuery(this.query);
  var config = merge({},
    defaults,
    this.options.underscoreTemplateLoader,
    queryOptions);
  var templateLocal;
  var compiled;

  templateLocal = config.minify ?
    minify(source, config.minifierOptions) : source;
  compiled = template(templateLocal, config.templateOptions);

  return 'module.exports = ' + compiled + ';\n';

};
