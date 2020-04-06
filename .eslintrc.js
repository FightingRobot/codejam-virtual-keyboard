module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base/legacy',
	
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
	  "no-use-before-define": "off",
	  'class-methods-use-this': 'off',
	  'default-case': 'off',
	  'no-restricted-syntax': 'off',
  },
};
