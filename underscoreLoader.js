/* eslint "no-unused-expressions": 0 */

'use strict';

const loaderUtils = require('loader-utils');
const template = require('lodash.template');
const minify = require('html-minifier').minify;
const extendDeepImmutable = require('extend-deep-immutable');

const defaults = {
  engine: 'lodash',
  engineFull: null,
  minify: false,
  minifierOptions: {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true
  },
  templateOptions: {}
};

module.exports = function (source) {
  this.cacheable && this.cacheable();

  const queryOptions = loaderUtils.parseQuery(this.query);
  const config = extendDeepImmutable({}, defaults,
    this.options.underscoreTemplateLoader, { templateOptions: queryOptions });
  let templateLocal;

  if (config.engineFull === null) config.engineFull = 'var _ = require(\'' + config.engine + '\');\n\n';
  templateLocal = config.minify ? minify(source, config.minifierOptions) : source;
  templateLocal = template(templateLocal, config.templateOptions);
  return config.engineFull + 'module.exports = ' + templateLocal + ';\n';
};
