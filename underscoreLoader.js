'use strict';

const loaderUtils = require('loader-utils');
const lodashTemplate = require('lodash.template');
const minify = require('html-minifier').minify;

const defaults = {
  engine: 'var _ = { escape: require(\'lodash.escape\') };',
  minify: true,
  minifierOptions: {
    removeComments: true,
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true
  },
  originalSource: true,
  templateOptions: {}
};

module.exports = function (source) {
  const config = Object.assign({}, defaults, loaderUtils.getOptions(this));
  let template;

  config.minifierOptions = Object.assign({}, defaults.minifierOptions, config.minifierOptions);
  config.templateOptions = Object.assign({}, defaults.templateOptions, config.templateOptions);

  template = config.minify ? minify(source, config.minifierOptions) : source;
  template = lodashTemplate(template, config.templateOptions);
  template = `${ config.engine }\nmodule.exports = ${ template };\n`;

  if (config.originalSource) template += `\n/*\noriginal source:\n\n${ source }\n*/\n`;

  return template;
};
