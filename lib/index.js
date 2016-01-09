var _ = require('lodash');
var loaderUtils = require('loader-utils');
var minify = require('html-minifier').minify;

var defaults = require('./defaults');
var exportTemplate = require('./exportTemplate');

module.exports = function (source) {

  this.cacheable && this.cacheable();

  var queryOptions = loaderUtils.parseQuery(this.query);
  var config = _.object.merge({},
    defaults,
    this.options.underscoreTemplateLoader,
    queryOptions);
  var exportTemplateLocal = config.exportTemplate || exportTemplate;
  var template;
  var compiled;
  var exportedModule;

  template = config.minify ?
    minify(source, config.minifierOptions) : source;
  compiled = _.template(template, config.templateOptions);
  exportedModule = _.template(exportTemplateLocal, {
    engine: config.engine,
    template: template
  });

  return exportedModule;

};
