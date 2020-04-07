module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
	
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
	  "semi": "off",
	  "no-plusplus": "off",
      "quotes": ["error", "single"],
    'class-methods-use-this': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'default-case': 'off',
    'no-unused-expressions': 'off',
    'no-restricted-syntax': 'off',
    'linebreak-style': 'off',
  },
};
