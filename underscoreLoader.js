'use strict';

const loaderUtils = require('loader-utils');
const lodashTemplate = require('lodash.template');
const minify = require('html-minifier').minify;
const extendDeepImmutable = require('extend-deep-immutable');

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

const generateSource = source => `\n/*\noriginal source:\n\n${ source }\n*/\n`;

module.exports = function (source) {
  const config = [
    defaults,
    loaderUtils.getOptions(this)
  ]
    .reduce(extendDeepImmutable);
  let template;

  template = config.minify ? minify(source, config.minifierOptions) : source;
  template = lodashTemplate(template, config.templateOptions);
  template = `${ config.engine }\nmodule.exports = ${ template };\n`;

  if (config.originalSource) template += generateSource(source);

  return template;
};
