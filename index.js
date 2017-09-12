module.exports = {
    extends: [
        'eslint-config-airbnb-base',
    ].map(require.resolve),
    rules: {
        indent: [2, 4],
        camelcase: 0,
        yoda: ["error", "always", { "onlyEquality": true }],
        'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
        'padded-blocks': ['error', { "classes": "always", "blocks": "never", "switches": "never" }],
        'key-spacing': [2, {
            singleLine: {
                beforeColon: false,
                afterColon:  true
            },
            multiLine: {
                beforeColon: false,
                afterColon:  true,
                mode: 'minimum'
            }
        }],
        'max-len': [ 'error', 100, 2, {
            ignoreUrls: true,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'func-names': 0,
        'class-methods-use-this': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'react/jsx-uses-vars': [2],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [0, 4],
        'react/forbid-prop-types': 0,
        'no-unused-vars': [2, {'varsIgnorePattern': '_+'}],
        'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
        'import/no-extraneous-dependencies': [0, { devDependencies: true }],
        'space-before-function-paren': ['error', 'never'],
        "no-param-reassign": ["error", { "props": false }],
        'no-multi-spaces': [2, {
            exceptions: {
                Identifier: true,
                ClassProperty: true,
                ImportDeclaration: true,
                VariableDeclarator: true,
                AssignmentExpression: true,
                JSXAttribute: true,
                JSXIdentifier: true,
                JSXOpeningElement: true,
                JSXClosingElement: true,
            },
        }],
    },
    globals: {
        fetch: false
    },
    plugins: [
        'react',
        'jsx-a11y',
        'import',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        sourceType: 'module'
    },
    env: {
        browser: true,
        es6: true
    },
};
