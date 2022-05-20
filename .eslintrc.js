module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        // 'plugin:unicorn/recommended',
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'unicorn', 'promise', '@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.tsx', '.ts', '.js', '.json'],
            },
            typescript: {},
        },
    },
    rules: {
        'import/extensions': [
            2,
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                json: 'never',
                js: 'never',
            },
        ],
        'react/jsx-filename-extension': [2, { extensions: ['.tsx', 'ts', '.jsx', 'js'] }],
        'linebreak-style': ['off', 'windows'],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/no-explicit-any': ['off'],
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
        'no-use-before-define': 0,
        'import/no-unresolved': 0,
        'unicorn/prefer-module': 0,
        'unicorn/import-style': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'react/require-default-props': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-array-index-key': 0,
    },
};