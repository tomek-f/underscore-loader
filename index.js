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
  var queryOptions = loaderUtils.parseQuery(this.query);
  var engine = this.options.engine || 'lodash';
  var template = _.template(source, queryOptions, this.options.tplSettings);
  return 'var _ = require(' + engine + ');\n\nmodule.exports = ' + template + '\n';
};
