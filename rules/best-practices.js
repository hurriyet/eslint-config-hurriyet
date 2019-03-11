module.exports = {
    rules: {
        // https://eslint.org/docs/rules/accessor-pairs
        // NOT: Gerekli olmadığından bu kontrol kapalı
        'accessor-pairs': 'off',

        // https://eslint.org/docs/rules/array-callback-return
        'array-callback-return': ['error', { allowImplicit: true }],

        // https://eslint.org/docs/rules/block-scoped-var
        'block-scoped-var': 'error',

        // https://eslint.org/docs/rules/class-methods-use-this
        'class-methods-use-this': [
            'error',
            {
                exceptMethods: [],
            },
        ],

        // https://eslint.org/docs/rules/complexity
        'complexity': ['off', 11],

        // https://eslint.org/docs/rules/consistent-return
        'consistent-return': 'error',

        // https://eslint.org/docs/rules/curly
        'curly': ['error', 'multi-line'],

        // https://eslint.org/docs/rules/default-case
        'default-case': ['error', { commentPattern: '^skip\\sdefault' }],

        // https://eslint.org/docs/rules/dot-location
        'dot-location': ['error', 'property'],

        // https://eslint.org/docs/rules/dot-notation
        'dot-notation': ['error', { allowKeywords: true }],

        // https://eslint.org/docs/rules/eqeqeq
        'eqeqeq': [
            'error',
            'always',
            { null: 'ignore' },
        ],

        // https://eslint.org/docs/rules/guard-for-in
        'guard-for-in': 'error',

        // https://eslint.org/docs/rules/max-classes-per-file
        // NOT: Moduler yapıya geçilmediği sürece kullanımı olası görünmüyor
        'max-classes-per-file': ['off', 1],

        // https://eslint.org/docs/rules/no-alert
        'no-alert': 'warn',

        // https://eslint.org/docs/rules/no-caller
        'no-caller': 'error',

        // https://eslint.org/docs/rules/no-case-declarations
        'no-case-declarations': 'error',

        // https://eslint.org/docs/rules/no-div-regex
        'no-div-regex': 'error',

        // https://eslint.org/docs/rules/no-else-return
        'no-else-return': ['error', { allowElseIf: false }],

        // https://eslint.org/docs/rules/no-empty-function
        'no-empty-function': [
            'error',
            {
                allow: [
                    'arrowFunctions',
                    'functions',
                    'methods',
                ],
            },
        ],

        // https://eslint.org/docs/rules/no-empty-pattern
        'no-empty-pattern': 'error',

        // https://eslint.org/docs/rules/no-eq-null
        'no-eq-null': 'off',

        // https://eslint.org/docs/rules/no-eval
        'no-eval': 'error',

        // https://eslint.org/docs/rules/no-extend-native
        'no-extend-native': 'error',

        // https://eslint.org/docs/rules/no-extra-bind
        'no-extra-bind': 'error',

        // https://eslint.org/docs/rules/no-extra-label
        'no-extra-label': 'error',

        // https://eslint.org/docs/rules/no-fallthrough
        'no-fallthrough': 'error',

        // https://eslint.org/docs/rules/no-floating-decimal
        'no-floating-decimal': 'error',

        // https://eslint.org/docs/rules/no-global-assign
        'no-global-assign': ['error', { exceptions: [] }],

        // https://eslint.org/docs/rules/no-implicit-coercion
        'no-implicit-coercion': [
            'off',
            {
                boolean: false,
                number: true,
                string: true,
                allow: [],
            },
        ],

        // https://eslint.org/docs/rules/no-implicit-globals
        // NOT: Kullanımı mümkün görünmüyor, bu nedenle kapalı
        'no-implicit-globals': 'off',

        // https://eslint.org/docs/rules/no-implied-eval
        'no-implied-eval': 'error',

        // https://eslint.org/docs/rules/no-invalid-this
        'no-invalid-this': 'off',

        // https://eslint.org/docs/rules/no-iterator
        'no-iterator': 'error',

        // https://eslint.org/docs/rules/no-labels
        'no-labels': ['error'],

        // https://eslint.org/docs/rules/no-lone-blocks
        'no-lone-blocks': 'error',

        // https://eslint.org/docs/rules/no-loop-func
        'no-loop-func': 'error',

        // https://eslint.org/docs/rules/no-magic-numbers
        'no-magic-numbers': [
            'off',
            {
                ignore: [],
                ignoreArrayIndexes: true,
                enforceConst: true,
                detectObjects: false,
            },
        ],

        // https://eslint.org/docs/rules/no-multi-spaces
        'no-multi-spaces': [
            'error',
            {
                ignoreEOLComments: false,
            },
        ],

        // https://eslint.org/docs/rules/no-multi-str
        'no-multi-str': 'error',

        // https://eslint.org/docs/rules/no-new
        'no-new': 'off',

        // https://eslint.org/docs/rules/no-new-func
        'no-new-func': 'error',

        // https://eslint.org/docs/rules/no-new-wrappers
        'no-new-wrappers': 'error',

        // https://eslint.org/docs/rules/no-octal
        'no-octal': 'error',

        // https://eslint.org/docs/rules/no-octal-escape
        'no-octal-escape': 'error',

        // rule: https://eslint.org/docs/rules/no-param-reassign.html
        // NOT: i, item gibi döngülerde sık kullanılan isimleri engellediğinden kapalı
        'no-param-reassign': 'off',

        // https://eslint.org/docs/rules/no-proto
        'no-proto': 'error',

        // https://eslint.org/docs/rules/no-redeclare
        'no-redeclare': 'error',

        // https://eslint.org/docs/rules/no-restricted-properties
        'no-restricted-properties': [
            'error',
            {
                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated',
            },
            {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            },
        ],

        // https://eslint.org/docs/rules/no-return-assign
        'no-return-assign': ['error', 'always'],

        // https://eslint.org/docs/rules/no-return-await
        'no-return-await': 'error',

        // https://eslint.org/docs/rules/no-script-url
        // NOT: Yan etki görülmediğinden kapatıldı
        'no-script-url': 'off',

        // https://eslint.org/docs/rules/no-self-assign
        'no-self-assign': ['error', { props: true }],

        // https://eslint.org/docs/rules/no-self-compare
        'no-self-compare': 'error',

        // https://eslint.org/docs/rules/no-sequences
        'no-sequences': 'error',

        // https://eslint.org/docs/rules/no-throw-literal
        'no-throw-literal': 'error',

        // https://eslint.org/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': 'error',

        // https://eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
            },
        ],

        // https://eslint.org/docs/rules/no-unused-labels
        'no-unused-labels': 'error',

        // https://eslint.org/docs/rules/no-useless-call
        'no-useless-call': 'off',

        // https://eslint.org/docs/rules/no-useless-call
        'no-useless-catch': 'error',

        // https://eslint.org/docs/rules/no-useless-concat
        'no-useless-concat': 'error',

        // https://eslint.org/docs/rules/no-useless-escape
        'no-useless-escape': 'error',

        // https://eslint.org/docs/rules/no-useless-return
        'no-useless-return': 'error',

        // https://eslint.org/docs/rules/no-void
        'no-void': 'error',

        // https://eslint.org/docs/rules/no-warning-comments
        // NOT: Codebase büyük projeler için uygun olmadığından kapalı
        'no-warning-comments': [
            'off',
            {
                terms: [
                    'todo',
                    'fixme',
                    'xxx',
                ],
                location: 'start',
            },
        ],

        // https://eslint.org/docs/rules/no-with
        'no-with': 'error',

        // https://eslint.org/docs/rules/prefer-named-capture-group
        'prefer-named-capture-group': 'off',

        // https://eslint.org/docs/rules/prefer-promise-reject-errors
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

        // https://eslint.org/docs/rules/radix
        'radix': 'error',

        // https://eslint.org/docs/rules/require-await
        'require-await': 'off',

        // https://eslint.org/docs/rules/require-unicode-regexp
        'require-unicode-regexp': 'off',

        // https://eslint.org/docs/rules/vars-on-top
        'vars-on-top': 'error',

        // https://eslint.org/docs/rules/wrap-iife.html
        'wrap-iife': [
            'error',
            'outside',
            { functionPrototypeMethods: false },
        ],

        // https://eslint.org/docs/rules/yoda
        'yoda': 'error',
    },
};
