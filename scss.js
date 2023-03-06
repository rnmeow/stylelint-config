'use strict'

module.exports = {
  customSyntax: require('postcss-scss'),
  plugins: ['stylelint-scss'],
  extends: ['./modules/scss']
}
