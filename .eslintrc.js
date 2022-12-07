module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
        'max-len': ['error', { code: 140, ignoreUrls: true }],
        'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1 }],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
