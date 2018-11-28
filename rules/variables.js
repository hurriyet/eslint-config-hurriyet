module.exports = {
    rules: {
        // https://eslint.org/docs/rules/init-declarations
        // NOT: Kullanımı zorlaştırdığından kapalı
        'init-declarations': 'off',

        // https://eslint.org/docs/rules/no-delete-var
        'no-delete-var': 'error',

        // https://eslint.org/docs/rules/no-label-var
        'no-label-var': 'error',

        // https://eslint.org/docs/rules/no-restricted-globals
        // NOT: Böyle bir ihtiyaç olmadığından bu özellik kapalı
        'no-restricted-globals': 'off',

        // https://eslint.org/docs/rules/no-shadow
        // NOT: Yalnızca kod okumayı zorlaştırıyor, bunun dışında yan etkisi olmadığından kapalı
        'no-shadow': 'off',

        // https://eslint.org/docs/rules/no-shadow-restricted-names
        'no-shadow-restricted-names': 'error',

        // https://eslint.org/docs/rules/no-undef
        'no-undef': 'error',

        // https://eslint.org/docs/rules/no-undef-init
        'no-undef-init': 'error',

        // https://eslint.org/docs/rules/no-undefined
        'no-undefined': 'error',

        // https://eslint.org/docs/rules/no-unused-vars
        'no-unused-vars': [
            'error',
            {
                args: 'none',
                ignoreRestSiblings: true,
                vars: 'local',
            },
        ],

        // https://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': [
            'error',
            {
                classes: true,
                functions: true,
                variables: true,
            },
        ],
    },
};
