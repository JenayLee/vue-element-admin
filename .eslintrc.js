// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // 关闭语句强制分号结尾
    semi: [0],
    //空行最多不能超过100行
    'no-multiple-empty-lines': [
      0,
      {
        max: 100
      }
    ],
    'switch-colon-spacing': ['error', {
      'after': false,
      'before': true
    }],
    //关闭禁止混用tab和空格
    'no-mixed-spaces-and-tabs': [0],
    'no-alert': 0, //禁止使用alert confirm prompt
    'no-debugger': 2, //禁止使用debugger
    'generator-star-spacing': 'off',
    'space-before-function-paren': 0,
    'eol-last': 0,
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }
    ],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1
      }
    ],
    indent: 'off'
  }
};
