module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['eslint-plugin-tsdoc'],
  // add your custom rules here
  rules: {
    'tsdoc/syntax': 'warn',
  },
}
