/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:astro/recommended',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'deprecation/deprecation': 'off',
        'prettier/prettier': 'off'
      },
    },
    {
      extends: ['plugin:markdown/recommended'],
      files: ['**/*.md', '**/*.md/*.{js,jsx,ts,tsx,astro}'],
      processor: 'markdown/markdown',
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'astro',
    'deprecation',
    'simple-import-sort',
    'typescript-sort-keys',
    'react-refresh',
  ],
  root: true,
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
      {
        "usePrettierrc": true
      }
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'simple-import-sort/imports': 'error',
    'no-empty-pattern': 'off',
    'simple-import-sort/exports': 'error',
    'deprecation/deprecation': 'error',

    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'typescript-sort-keys/interface': 'off',
    'no-empty-pattern': 'error',

    // Stylistic concerns that don't interfere with Prettier
    'no-mixed-spaces-and-tabs': 'off',
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': 'off',
  },
};