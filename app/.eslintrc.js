module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/button-has-type': 0,
    'no-use-before-define': 0,
    'no-undef': 0,
  },
};
