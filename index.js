module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['prettier'],

  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    strict: 0,
    'no-undef': 2,
    'no-tabs': 'error',

    // This is configured specifically to play well with Prettier. The name is misleading, it *does*
    // allow `template-literal ${strings}`; it just advises you to convert them back into simple
    // single-quotes if there's no interpolation.
    quotes: ['quotes', 'double', { avoidEscape: true, allowTemplateLiterals: false }],

    'prettier/prettier': 'warn',
  },

  env: {
    es6: true,
  },
};
