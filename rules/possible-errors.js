module.exports = {
    rules: {
        // https://eslint.org/docs/rules/for-direction
        'for-direction': 'error',

        // https://eslint.org/docs/rules/getter-return
        'getter-return': ['error', { allowImplicit: true }],

        // https://eslint.org/docs/rules/no-async-promise-executor
        // NOT: Async function kullanıldığında hata yönetimiyle ilgili sorunlara yol açtığı yazılmış, ihtiyaç duyulursa açılabilir
        'no-async-promise-executor': 'error',

        // https://eslint.org/docs/rules/no-await-in-loop
        'no-await-in-loop': 'error',

        // https://eslint.org/docs/rules/no-compare-neg-zero
        'no-compare-neg-zero': 'error',

        // https://eslint.org/docs/rules/no-cond-assign
        'no-cond-assign': ['error', 'except-parens'],

        // https://eslint.org/docs/rules/no-console
        'no-console': 'warn',

        // https://eslint.org/docs/rules/no-constant-condition
        'no-constant-condition': 'error',

        // https://eslint.org/docs/rules/no-control-regex
        'no-control-regex': 'error',

        // https://eslint.org/docs/rules/no-debugger
        'no-debugger': 'error',

        // https://eslint.org/docs/rules/no-dupe-args
        'no-dupe-args': 'error',

        // https://eslint.org/docs/rules/no-dupe-keys
        'no-dupe-keys': 'error',

        // https://eslint.org/docs/rules/no-duplicate-case
        'no-duplicate-case': 'error',

        // https://eslint.org/docs/rules/no-empty
        'no-empty': 'error',

        // https://eslint.org/docs/rules/no-empty-character-class
        'no-empty-character-class': 'error',

        // https://eslint.org/docs/rules/no-ex-assign
        'no-ex-assign': 'error',

        // https://eslint.org/docs/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 'error',

        // https://eslint.org/docs/rules/no-extra-parens
        'no-extra-parens': [
            'off',
            'all',
            {
                conditionalAssign: true,
                enforceForArrowConditionals: false,
                ignoreJSX: 'none',
                nestedBinaryExpressions: false,
                returnAssign: false,
            },
        ],

        // https://eslint.org/docs/rules/no-extra-semi
        'no-extra-semi': 'error',

        // https://eslint.org/docs/rules/no-func-assign
        'no-func-assign': 'error',

        // https://eslint.org/docs/rules/no-inner-declarations
        'no-inner-declarations': 'error',

        // https://eslint.org/docs/rules/no-invalid-regexp
        'no-invalid-regexp': 'error',

        // https://eslint.org/docs/rules/no-irregular-whitespace
        'no-irregular-whitespace': 'error',

        // https://eslint.org/docs/rules/no-misleading-character-class
        'no-misleading-character-class': 'error',

        // https://eslint.org/docs/rules/no-obj-calls
        'no-obj-calls': 'error',

        // https://eslint.org/docs/rules/no-prototype-builtins
        // NOT: Object.create(null) metodu ile oluşturulan objelerde Object.prototype metodlarına ulaşılamadığından hataya neden oluyor ancak
        // biz bu Object.create metodunu kullanmadığımızdan karşılaşma olasılığımız düşük, bu nedenle bu ayar kapalı
        'no-prototype-builtins': 'off',

        // https://eslint.org/docs/rules/no-regex-spaces
        'no-regex-spaces': 'error',

        // https://eslint.org/docs/rules/no-sparse-arrays
        'no-sparse-arrays': 'error',

        // https://eslint.org/docs/rules/no-template-curly-in-string
        'no-template-curly-in-string': 'error',

        // https://eslint.org/docs/rules/no-unexpected-multiline
        'no-unexpected-multiline': 'error',

        // https://eslint.org/docs/rules/no-unreachable
        'no-unreachable': 'error',

        // https://eslint.org/docs/rules/no-unsafe-finally
        'no-unsafe-finally': 'error',

        // https://eslint.org/docs/rules/no-unsafe-negation
        'no-unsafe-negation': 'error',

        // https://eslint.org/docs/rules/require-atomic-updates
        'require-atomic-updates': 'error',

        // https://eslint.org/docs/rules/use-isnan
        'use-isnan': 'error',

        // https://eslint.org/docs/rules/valid-jsdoc
        // NOT: JSDoc kullanmadığımızdan kapalı
        'valid-jsdoc': 'off',

        // https://eslint.org/docs/rules/valid-typeof
        'valid-typeof': ['error', { requireStringLiterals: true }],
    },
};
