module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'preact',
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 'off',
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'import/no-unresolved': ['error', { ignore: ['^https'] }],
  },
  overrides: [{
    files: ['./src/*.js'],
    excludedFiles: ['./build.js'],
  }],
  settings: {
    react: {
      version: 'latest',
    },
  }
};
