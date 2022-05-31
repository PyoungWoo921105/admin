module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['better-styled-components'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'no-nested-ternary': 0,
    'class-methods-use-this': 0,
    'better-styled-components/sort-declarations-alphabetically': 2,

    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,
        checksVoidReturn: false,
      },
    ],

    'no-use-before-define': 0,

    'consistent-return': 0,

    'react/prop-types': 0,
    'react/require-default-props': 0,

    'import/no-cycle': 0,

    '@typescript-eslint/no-empty-interface': 0,

    '@typescript-eslint/explicit-module-boundary-types': ['off'],

    /*  */
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    /*  */
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
