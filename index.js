module.exports = {
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    rules: {
        indent: [
            2, 4,
            { SwitchCase: 1 },
        ],
        camelcase: 0,
        yoda: 'off',
        'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
        'padded-blocks': ['error', { 'classes': 'always', 'blocks': 'never', 'switches': 'never' }],
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
        'import/prefer-default-export': 0,
        'default-case': 0,
        'function-paren-newline': ['error', 'consistent'],
        'class-methods-use-this': 0,
        'no-underscore-dangle': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'react/jsx-uses-vars': [2],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [0, 4],
        'react/forbid-prop-types': 0,
        'no-unused-vars': [2, {'varsIgnorePattern': '_+'}],
        'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
        'import/no-extraneous-dependencies': [0, { devDependencies: true }],
        'no-param-reassign': ['error', { 'props': false }],
        'object-curly-newline': ['error', { 'consistent': true }],
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
        "default-case": 0,
        "func-names:": 0,
        "space-before-function-paren": 0,
        "react/jsx-handler-names": 0,
        "react/jsx-fragments": 0,
        "react/no-unused-prop-types": 0,
        "import/export": 0,
        'react/prop-types': 0,
        'import/prefer-default-export': 0,
        '@typescript-eslint/no-explicit-any': 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "always-multiline"
        }],
        "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
        "semi": ["error", "never"],
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
