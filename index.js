var _ = require('lodash');
var loaderUtils = require('loader-utils');

module.exports = function (source) {

  this.cacheable && this.cacheable();

  var queryOptions = loaderUtils.parseQuery(this.query);
  var opts = _.object.merge({},
    this.options.underscoreTemplateLoader,
    queryOptions);
  var template = _.template(source, opts);
  var engine = opts.engine || 'lodash'; // todo defaults

  return 'var _ = require(' + engine + ');\n\nmodule.exports = ' +
    template + '\n';

};
