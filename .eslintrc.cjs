/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended', // Include this line
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'tailwindcss', // Include this line
  ],
  env: {
    browser: true,
    node: true,
    'vitest/globals': true, // Add the vitest/globals environment
  },
};
