// query
//{ test: /\.png$/, loader: "url-loader?mimetype=image/png" }
//{
//    test: /\.png$/,
//    loader: "url-loader",
//    query: { mimetype: "image/png" }
//}

// settings
// tplSettings: {
//  escape: /\{\{([^{].*?)\}\}/gm,
//  interpolate: /\{\{\{(.+?)\}\}\}/gm,
//  evaluate: /\{\%(.+?)\%\}/g
//}

var _ = require('lodash');
var loaderUtils = require('loader-utils');

module.exports = function (source) {

  this.cacheable && this.cacheable();

  var opts = this.options.underscoreTemplateLoader =
    this.options.underscoreTemplateLoader || {};
  var queryOptions = loaderUtils.parseQuery(this.query);
  var template = _.template(source, queryOptions, opts.tplSettings);
  opts.engine = opts.engine || 'lodash';

  return 'var _ = require(' + opts.engine + ');\n\nmodule.exports = ' +
    template + '\n';

};
