module.exports = {
    rules: {
        // https://eslint.org/docs/rules/array-bracket-newline
        'array-bracket-newline': "off",

        // https://eslint.org/docs/rules/array-bracket-spacing
        'array-bracket-spacing': "off",

        // https://eslint.org/docs/rules/array-element-newline
        'array-element-newline': "off",

        // https://eslint.org/docs/rules/block-spacing
        'block-spacing': "off",

        // https://eslint.org/docs/rules/brace-style
        'brace-style': "off",

        // https://eslint.org/docs/rules/camelcase
        'camelcase': "off",

        // https://eslint.org/docs/rules/capitalized-comments
        // NOT: Kod yazımını doğrudan etkileyen bir özellik değil, dolayısıyla kapalı
        'capitalized-comments': "off",

        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': "off",

        // https://eslint.org/docs/rules/comma-spacing
        'comma-spacing': "off",

        // https://eslint.org/docs/rules/comma-style
        'comma-style': [
            'error',
            'last',
            {
                exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                    NewExpression: false,
                },
            },
        ],

        // https://eslint.org/docs/rules/computed-property-spacing
        'computed-property-spacing': "off",

        // https://eslint.org/docs/rules/consistent-this
        // NOT: Kullanımı zorlaştıracağından kapalı
        'consistent-this': 'off',

        // https://eslint.org/docs/rules/eol-last
        'eol-last': "off",

        // https://eslint.org/docs/rules/func-call-spacing
        'func-call-spacing': "off",

        // https://eslint.org/docs/rules/func-name-matching
        'func-name-matching': "off",

        // https://eslint.org/docs/rules/func-names
        'func-names': 'off',

        // https://eslint.org/docs/rules/func-style
        'func-style': 'off',

        // https://eslint.org/docs/rules/function-paren-newline
        'function-paren-newline': "off",

        // https://eslint.org/docs/rules/id-blacklist
        'id-blacklist': 'off',

        // https://eslint.org/docs/rules/id-length
        'id-length': 'off',

        // https://eslint.org/docs/rules/id-match
        'id-match': 'off',

        // https://eslint.org/docs/rules/implicit-arrow-linebreak
        'implicit-arrow-linebreak': ['error', 'beside'],

        // https://eslint.org/docs/rules/indent
        'indent': "off",

        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': ['off', 'prefer-double'],

        // https://eslint.org/docs/rules/key-spacing
        'key-spacing': "off",

        // https://eslint.org/docs/rules/keyword-spacing
        'keyword-spacing': "off",

        // https://eslint.org/docs/rules/line-comment-position
        'line-comment-position': "off",

        // https://eslint.org/docs/rules/linebreak-style
        // NOT: Developer cihaz çeşitliliği nedeniyle bu seçeneği kullanmak mümkün görünmüyor
        'linebreak-style': ['off', 'unix'],

        // https://eslint.org/docs/rules/lines-around-comment
        // NOT: Kod yazımını direk etkilemediğinden kapalı
        'lines-around-comment': 'off',

        // https://eslint.org/docs/rules/lines-between-class-members
        'lines-between-class-members': "off",

        // https://eslint.org/docs/rules/max-depth
        // NOT: Uygulanabilir görünmüyor
        'max-depth': ['off', 4],

        // https://eslint.org/docs/rules/max-len
        'max-len': [
            'warn',
            120,
            2,
            {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],

        // https://eslint.org/docs/rules/max-lines
        // NOT: Kullanılabilir görünmüyor, kapalı
        'max-lines': "off",

        // https://eslint.org/docs/rules/max-lines-per-function
        // NOT: Kullanılabilir görünmüyor, kapalı
        'max-lines-per-function': "off",

        // https://eslint.org/docs/rules/max-nested-callbacks
        'max-nested-callbacks': [
            'error',
            {
                max: 10,
            },
        ],

        // https://eslint.org/docs/rules/max-params
        'max-params': "off",

        // https://eslint.org/docs/rules/max-statements
        // NOT: Kullanılabilir görünmüyor, kapalı
        'max-statements': ['off', 10],

        // https://eslint.org/docs/rules/max-statements-per-line
        // NOT: Tek satır kodlarda bu seçenek yazımı zorlaştıracağından kapalı
        'max-statements-per-line': ['off', { max: 1 }],

        // https://eslint.org/docs/rules/multiline-comment-style
        // NOT: Doğrudan kodu etkilemediğinden bu seçenek kapalı
        'multiline-comment-style': ['off', 'starred-block'],

        // https://eslint.org/docs/rules/multiline-ternary
        // NOT: Tek satır kod yazımlarını zorlaştıracağından kapalı
        'multiline-ternary': ['off', 'never'],

        // https://eslint.org/docs/rules/new-cap
        'new-cap': "off",

        // https://eslint.org/docs/rules/new-parens
        'new-parens': 'off',

        // https://eslint.org/docs/rules/newline-per-chained-call
        'newline-per-chained-call': 'off',

        // https://eslint.org/docs/rules/no-array-constructor
        'no-array-constructor': 'error',

        // https://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 'error',

        // https://eslint.org/docs/rules/no-continue
        'no-continue': 'error',

        // https://eslint.org/docs/rules/no-inline-comments
        // NOT: inline commentler obje property'lerini açıklamak için faydalı olabiliyor
        'no-inline-comments': 'off',

        // https://eslint.org/docs/rules/no-lonely-if
        'no-lonely-if': 'error',

        // https://eslint.org/docs/rules/no-mixed-operators
        'no-mixed-operators': 'error',

        // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        'no-mixed-spaces-and-tabs': "off",

        // https://eslint.org/docs/rules/no-multi-assign
        'no-multi-assign': "off",

        // https://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],

        // https://eslint.org/docs/rules/no-negated-condition
        // NOT: Sık kullanılan bir kontrol tipi, yazımı zorlaştıracağından kapalı
        'no-negated-condition': 'off',

        // https://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': 'warn',

        // https://eslint.org/docs/rules/no-new-object
        'no-new-object': 'error',

        // https://eslint.org/docs/rules/no-plusplus
        // NOT: Döngülerde sık kullanıldığından kapatıldı
        'no-plusplus': 'off',

        // https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],

        // https://eslint.org/docs/rules/no-tabs
        'no-tabs': 'warn',

        // https://eslint.org/docs/rules/no-ternary
        // NOT: Sık kullanılan bir yazım stili olduğundan kapalı
        'no-ternary': 'off',

        // https://eslint.org/docs/rules/no-trailing-spaces
        'no-trailing-spaces': [
            'warn',
            {
                skipBlankLines: false,
                ignoreComments: false,
            },
        ],

        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': [
            'warn',
            {
                allow: [],
                allowAfterThis: false,
                allowAfterSuper: false,
                enforceInMethodNames: true,
            },
        ],

        // https://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': ['warn', { defaultAssignment: false }],

        // https://eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 'error',

        // https://eslint.org/docs/rules/nonblock-statement-body-position
        'nonblock-statement-body-position': [
            'error',
            'beside',
            { overrides: {} },
        ],

        // https://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': "off",

        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': "off",

        // https://eslint.org/docs/rules/object-property-newline
        'object-property-newline': "off",

        // https://eslint.org/docs/rules/one-var
        'one-var': "off",

        // https://eslint.org/docs/rules/one-var-declaration-per-line
        'one-var-declaration-per-line': "off",

        // https://eslint.org/docs/rules/operator-assignment
        'operator-assignment': "off",

        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': "off",

        // https://eslint.org/docs/rules/padded-blocks
        'padded-blocks': "off",

        // https://eslint.org/docs/rules/padding-line-between-statements
        'padding-line-between-statements': 'off',

        // https://eslint.org/docs/rules/prefer-object-spread
        'prefer-object-spread': 'off',

        // https://eslint.org/docs/rules/quote-props.html
        'quote-props': "off",

        // https://eslint.org/docs/rules/quotes
        // NOT: Karma kullanım okunaklılığı negatif etkilemiyor
        'quotes': 'off',

        // https://eslint.org/docs/rules/semi
        'semi': ['warn', 'always'],

        // https://eslint.org/docs/rules/semi-spacing
        'semi-spacing': ['warn', { before: false, after: true }],

        // https://eslint.org/docs/rules/semi-style
        'semi-style': ['warn', 'last'],

        // https://eslint.org/docs/rules/sort-keys
        // NOT: before - after gibi mantıksal sıralamaları engelleyeceğinden kapalı
        'sort-keys': 'off',

        // https://eslint.org/docs/rules/sort-vars
        // NOT: kullanımı zor ve koda direkt etkisi olmadığından kapalı
        'sort-vars': 'off',

        // https://eslint.org/docs/rules/space-before-blocks
        'space-before-blocks': 'off',

        // https://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': 'off',

        // https://eslint.org/docs/rules/space-in-parens
        'space-in-parens': "off",

        // https://eslint.org/docs/rules/space-infix-ops
        'space-infix-ops': 'off',

        // https://eslint.org/docs/rules/space-unary-ops
        'space-unary-ops': 'off',

        // https://eslint.org/docs/rules/spaced-comment
        'spaced-comment': 'off',

        // https://eslint.org/docs/rules/switch-colon-spacing
        'switch-colon-spacing': ['warn', { after: true, before: false }],

        // https://eslint.org/docs/rules/template-tag-spacing
        'template-tag-spacing': ['error', 'never'],

        // https://eslint.org/docs/rules/unicode-bom
        'unicode-bom': 'off',

        // https://eslint.org/docs/rules/wrap-regex
        'wrap-regex': 'off',
    },
};
