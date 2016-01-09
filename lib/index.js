var _ = require('lodash');
var loaderUtils = require('loader-utils');
var defaults = require('./defaults');
var exportTemplate = require('./exportTemplate');
var minify = require('html-minifier').minify;

module.exports = function (source) {

  this.cacheable && this.cacheable();

  var queryOptions = loaderUtils.parseQuery(this.query);
  var config = _.object.merge({},
    defaults,
    this.options.underscoreTemplateLoader,
    queryOptions);
  var template = config.minify ? minify(source, config.minifierOptions) : source;
  var exportTemplateLocal = config.exportTemplate || exportTemplate;

  template = _.template(template, config.templateOptions);

  return _.template(exportTemplateLocal, {
    engine: config.engine,
    template: template
  });

};
