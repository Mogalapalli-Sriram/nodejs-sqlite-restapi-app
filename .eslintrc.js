module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,

  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    no-multi-spaces: ['error']
  },
};
