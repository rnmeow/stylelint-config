'use strict'

module.exports = {
  rules: {
    'alpha-value-notation': ['number', { severity: 'warning' }],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        severity: 'warning'
      }
    ],
    'color-hex-case': ['lower', { severity: 'warning' }],
    'color-hex-length': ['short', { severity: 'warning' }],
    'comment-whitespace-inside': ['always', { severity: 'warning' }],
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment'],
        severity: 'warning'
      }
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-declaration'],
        ignore: ['after-comment', 'inside-single-line-block'],
        severity: 'warning'
      }
    ],
    'font-family-name-quotes': ['always-where-recommended', { severity: 'warning' }],
    'function-name-case': ['lower', { severity: 'warning' }],
    'function-url-quotes': ['always', { severity: 'warning' }],
    'import-notation': ['string', { severity: 'warning' }],
    'length-zero-no-unit': [true, { ignore: ['custom-properties'], severity: 'warning' }],
    'no-irregular-whitespace': [true, { severity: 'warning' }],
    'number-leading-zero': ['never', { severity: 'warning' }],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'inside-block'],
        severity: 'warning'
      }
    ],
    'selector-attribute-quotes': ['always', { severity: 'warning' }],
    'selector-pseudo-element-colon-notation': ['double', { severity: 'warning' }],
    'selector-type-case': ['lower', { severity: 'warning' }],
    'value-keyword-case': ['lower', { severity: 'warning' }]
  }
}
