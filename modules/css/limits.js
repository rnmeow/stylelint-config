'use strict'

module.exports = {
  rules: {
    'at-rule-no-vendor-prefix': [true, { severity: 'error' }],
    'color-function-notation': ['modern', { severity: 'error' }],
    'color-named': ['never', { severity: 'error' }],
    'declaration-block-no-redundant-longhand-properties': [true, { severity: 'error' }],
    'declaration-no-important': null,
    'function-url-no-scheme-relative': [true, { severity: 'error' }],
    'media-feature-name-no-vendor-prefix': [true, { severity: 'error' }],
    'no-unknown-animations': [true, { severity: 'error' }],
    'property-no-vendor-prefix': [true, { severity: 'error' }],
    'selector-no-qualifying-type': [true, { severity: 'error' }],
    'selector-no-vendor-prefix': [true, { severity: 'error' }],
    'selector-max-id': [5, { severity: 'error' }],
    'selector-max-type': [5, { severity: 'error' }],
    'shorthand-property-no-redundant-values': [true, { severity: 'error' }],
    'time-min-milliseconds': [100, { severity: 'error' }],
    'value-no-vendor-prefix': [true, { severity: 'error' }]
  }
}
