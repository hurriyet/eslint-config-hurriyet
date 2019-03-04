module.exports = {
    rules: {
        // https://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': 'off',

        // https://eslint.org/docs/rules/arrow-parens
        'arrow-parens': 'off',

        // https://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': 'off',

        // https://eslint.org/docs/rules/constructor-super
        'constructor-super': 'error',

        // https://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': ['error', { before: false, after: true }],

        // https://eslint.org/docs/rules/no-class-assign
        'no-class-assign': 'error',

        // https://eslint.org/docs/rules/no-confusing-arrow
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true,
            },
        ],

        // https://eslint.org/docs/rules/no-const-assign
        'no-const-assign': 'error',

        // https://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'error',

        // https://eslint.org/docs/rules/no-duplicate-imports
        'no-duplicate-imports': 'error',

        // https://eslint.org/docs/rules/no-new-symbol
        'no-new-symbol': 'error',

        // https://eslint.org/docs/rules/no-restricted-imports
        // NOT: Kullanım ihtiyacı duyulmadığından kapalı
        'no-restricted-imports': [
            'off',
            {
                paths: [],
                patterns: [],
            },
        ],

        // https://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'error',

        // https://eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'error',

        // https://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 'error',

        // https://eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],

        // https://eslint.org/docs/rules/no-var
        'no-var': 'warn',

        // https://eslint.org/docs/rules/object-shorthand
        'object-shorthand': [
            'warn',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true,
            },
        ],

        // https://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': 'off',

        // https://eslint.org/docs/rules/prefer-const
        'prefer-const': [
            'warn',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],

        // https://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': [
            'warn',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: true,
                    object: true,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],

        // https://eslint.org/docs/rules/prefer-numeric-literals
        'prefer-numeric-literals': 'warn',

        // https://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': 'warn',

        // https://eslint.org/docs/rules/prefer-spread
        'prefer-spread': 'warn',

        // https://eslint.org/docs/rules/prefer-template
        'prefer-template': 'warn',

        // https://eslint.org/docs/rules/require-yield
        'require-yield': 'error',

        // https://eslint.org/docs/rules/rest-spread-spacing
        'rest-spread-spacing': 'off',

        // https://eslint.org/docs/rules/sort-imports
        // NOT: Bir önemi olmadığından kapalı
        'sort-imports': [
            'off',
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: [
                    'none',
                    'all',
                    'multiple',
                    'single',
                ],
            },
        ],

        // https://eslint.org/docs/rules/symbol-description
        'symbol-description': 'off',

        // https://eslint.org/docs/rules/template-curly-spacing
        'template-curly-spacing': 'off',

        // https://eslint.org/docs/rules/yield-star-spacing
        'yield-star-spacing': 'off',
    },
};
