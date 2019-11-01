module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint:recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/html-closing-bracket-newline': [2, { 'multiline': 'never' }],
    'space-before-function-paren': 'error',
    'no-debugger': 'warn',
    semi: [2, 'always']
  }
}
