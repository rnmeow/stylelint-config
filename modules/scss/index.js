module.exports = {
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'use',
          'forward',
          'mixin',
          'include',
          'function',
          'extend',
          'error',
          'warn',
          'debug',
          'at-root',
          'if',
          'else',
          'each',
          'for',
          'while'
        ],
        severity: 'warning'
      }
    ],
    'scss/at-else-closing-brace-newline-after': ['always-last-in-chain', { severity: 'warning' }],
    'scss/at-else-closing-brace-space-after': ['always-intermediate', { severity: 'warning' }],
    'scss/at-else-empty-line-before': ['never', { severity: 'warning' }],
    'scss/at-else-if-parentheses-space-before': ['always', { severity: 'warning' }],
    'scss/at-function-parentheses-space-before': ['never', { severity: 'warning' }],
    'scss/at-function-pattern': [
      '^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected function name to be dash-case.',
        severity: 'warning'
      }
    ],
    'scss/at-if-closing-brace-newline-after': ['always-last-in-chain', { severity: 'warning' }],
    'scss/at-if-closing-brace-space-after': ['always-intermediate', { severity: 'warning' }],
    'scss/at-mixin-argumentless-call-parentheses': ['never', { severity: 'warning' }],
    'scss/at-mixin-parentheses-space-before': ['never', { severity: 'warning' }],
    'scss/at-mixin-pattern': [
      '^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected mixin name to be dash-case.',
        severity: 'warning'
      }
    ],
    'scss/at-rule-conditional-no-parentheses': [true, { severity: 'warning' }],
    'scss/dollar-variable-colon-space-after': ['always', { severity: 'warning' }],
    'scss/dollar-variable-colon-space-before': ['never', { severity: 'warning' }],
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['after-dollar-variable', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
        severity: 'warning'
      }
    ],
    'scss/dollar-variable-pattern': [
      '^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected variable to be dash-case.',
        severity: 'warning'
      }
    ],
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['between-comments', 'stylelint-commands'],
        severity: 'warning'
      }
    ],
    'scss/double-slash-comment-whitespace-inside': ['always', { severity: 'warning' }],
    'scss/percent-placeholder-pattern': [
      '^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected placeholder to be dash-case.',
        severity: 'warning'
      }
    ],
    'scss/at-extend-no-missing-placeholder': [true, { severity: 'warning' }],
    'scss/at-if-no-null': [true, { severity: 'warning' }],
    'scss/at-import-no-partial-leading-underscore': [true, { severity: 'warning' }],
    'scss/at-import-partial-extension': ['never', { severity: 'warning' }],
    'scss/at-rule-no-unknown': [true, { severity: 'warning' }],
    'scss/comment-no-empty': [true, { severity: 'warning' }],
    'scss/declaration-nested-properties-no-divided-groups': [true, { severity: 'warning' }],
    'scss/dollar-variable-no-missing-interpolation': [true, { severity: 'warning' }],
    'scss/function-quote-no-quoted-strings-inside': [true, { severity: 'warning' }],
    'scss/function-unquote-no-unquoted-strings-inside': [true, { severity: 'warning' }],
    'scss/no-duplicate-mixins': [true, { severity: 'warning' }],
    'scss/no-global-function-names': [true, { severity: 'warning' }],
    'scss/operator-no-newline-after': [true, { severity: 'warning' }],
    'scss/operator-no-newline-before': [true, { severity: 'warning' }],
    'scss/operator-no-unspaced': [true, { severity: 'warning' }]
  }
}
