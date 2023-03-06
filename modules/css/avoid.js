'use strict'

module.exports = {
  rules: {
    'color-no-invalid-hex': [true, { severity: 'error' }],
    'function-calc-no-unspaced-operator': [true, { severity: 'error' }],
    'function-linear-gradient-no-nonstandard-direction': [true, { severity: 'error' }],
    'function-no-unknown': [true, { severity: 'error' }],
    'string-no-newline': [true, { severity: 'error' }],
    'unit-no-unknown': [true, { severity: 'error' }],
    'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates'], severity: 'error' }],
    'declaration-block-no-shorthand-property-overrides': [true, { severity: 'error' }],
    'selector-pseudo-class-no-unknown': [true, { severity: 'error' }],
    'selector-pseudo-element-no-unknown': [true, { severity: 'error' }],
    'selector-type-no-unknown': [true, { severity: 'error' }],
    'no-duplicate-selectors': [true, { severity: 'error' }],
    'keyframe-block-no-duplicate-selectors': [true, { severity: 'error' }],
    'font-family-no-duplicate-names': [true, { severity: 'error' }],
    'font-family-no-missing-generic-family-keyword': [true, { severity: 'error' }],
    'property-no-unknown': [true, { severity: 'error' }],
    'block-no-empty': [true, { severity: 'error' }],
    'media-feature-name-no-unknown': [true, { severity: 'error' }],
    'at-rule-no-unknown': [true, { severity: 'error' }],
    'comment-no-empty': [true, { severity: 'error' }],
    'no-descending-specificity': [true, { severity: 'error' }],
    'no-duplicate-at-import-rules': [true, { severity: 'error' }],
    'no-empty-source': [true, { severity: 'error' }],
    'declaration-block-no-duplicate-custom-properties': [true, { severity: 'error' }],
    'named-grid-areas-no-invalid': [true, { severity: 'error' }],
    'no-invalid-position-at-import-rule': [true, { severity: 'error' }],
    'custom-property-no-missing-var-function': [true, { severity: 'error' }],
    'annotation-no-unknown': [true, { severity: 'error' }]
  }
}
