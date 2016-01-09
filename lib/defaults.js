var exportTemplate = require('./exportTemplate');

module.exports = {
  engine: 'lodash',
  minify: false,
  minifierOptions: {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true
  },
  templateOptions: {},
  exportTemplate: exportTemplate
};
