var _ = require('lodash');
var loaderUtils = require('loader-utils');
var defaults = require('./defaults');
var exportTemplate = require('./exportTemplate');

module.exports = function (source) {

  this.cacheable && this.cacheable();

  var queryOptions = loaderUtils.parseQuery(this.query);
  var config = _.object.merge({},
    defaults,
    this.options.underscoreTemplateLoader,
    queryOptions);
  var template = _.template(source, config);

  return _.template(exportTemplate, {
    engine: config.engine,
    template: template
  });

};
