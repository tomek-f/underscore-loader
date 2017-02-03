'use strict';

const loaderUtils = require('loader-utils');
const lodashTemplate = require('lodash.template');
const minify = require('html-minifier').minify;
const extendDeepImmutable = require('extend-deep-immutable');

const defaults = {
  engine: 'lodash',
  engineFull: null,
  minify: true,
  minifierOptions: {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true
  },
  originalSource: true,
  templateOptions: {}
};

const generateSource = source => `\n/*\noriginal source:\n\n${ source }\n*/\n`;

module.exports = function (source) {
  const config = [
    defaults,
    loaderUtils.getLoaderConfig(this, 'underscoreTemplateLoader')
  ]
    .reduce(extendDeepImmutable);
  let template;

  if (config.engineFull === null) config.engineFull = `var _ = require('${ config.engine }');`;
  template = config.minify ? minify(source, config.minifierOptions) : source;
  template = lodashTemplate(template, config.templateOptions);
  template = `${ config.engineFull }\nmodule.exports = ${ template };\n`;
  if (config.originalSource) template += generateSource(source);
  return template;
};
