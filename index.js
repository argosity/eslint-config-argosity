module.exports = {
    extends: [
        'eslint-config-airbnb-base',
    ].map(require.resolve),
    rules: {
        indent: [2, 4],
        camelcase: 0,
        yoda: [2, 'always'],
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
        'func-names': 0,
        'class-methods-use-this': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/forbid-prop-types': 0,
        'no-unused-vars': [2, {'varsIgnorePattern': '_+'}],
        'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
        'import/no-extraneous-dependencies': [0, { devDependencies: true }],
        'space-before-function-paren': ['error', 'never'],
        'no-multi-spaces': [2, {
            exceptions: {
                Identifier: true,
                ClassProperty: true,
                ImportDeclaration: true,
                VariableDeclarator: true,
                AssignmentExpression: true,
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
};
