'use strict';

const template = require('lodash.template');
const loaderUtils = require('loader-utils');
const minify = require('html-minifier').minify;

const merge = require('./extendDeep');

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
  const config = merge({}, defaults, this.options.underscoreTemplateLoader, { templateOptions: queryOptions });
  let templateLocal;

  if (config.engineFull === null) config.engineFull = 'var _ = require(\'' + config.engine + '\');\n\n';
  templateLocal = config.minify ? minify(source, config.minifierOptions) : source;
  templateLocal = template(templateLocal, config.templateOptions);
  return config.engineFull + 'module.exports = ' + templateLocal + ';\n';
};
