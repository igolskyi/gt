module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2021,
    },
    rules: {
        'prettier/prettier': 'error',
        // semi: ['error', 'always'],
        'consistent-return': 'off',
        // 'arrow-parens': ['error', 'as-needed'],
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'no-debugger': 'error',
        // 'max-len': [
        //     'error',
        //     {
        //         code: 80,
        //         ignoreComments: true,
        //         ignoreRegExpLiterals: true,
        //         ignoreTrailingComments: true,
        //         ignoreTemplateLiterals: true,
        //         ignoreStrings: true,
        //         ignoreUrls: true,
        //     },
        // ],
    },
};
