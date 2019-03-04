module.exports = {
    rules: {
        // https://eslint.org/docs/rules/callback-return
        'callback-return': 'off',

        // https://eslint.org/docs/rules/global-require
        'global-require': 'off',

        // https://eslint.org/docs/rules/handle-callback-err
        'handle-callback-err': 'warn',

        // https://eslint.org/docs/rules/no-buffer-constructor
        'no-buffer-constructor': 'error',

        // https://eslint.org/docs/rules/no-mixed-requires
        // NOT: Kullanımı ciddi zorluk yaratacağından kapatıldı
        'no-mixed-requires': ['off', false],

        // https://eslint.org/docs/rules/no-new-require
        'no-new-require': 'error',

        // https://eslint.org/docs/rules/no-path-concat
        'no-path-concat': 'error',

        // https://eslint.org/docs/rules/no-process-env
        // NOT: İhtiyaç duyulabileceğinden kapatıldı
        'no-process-env': 'off',

        // https://eslint.org/docs/rules/no-process-exit
        // NOT: İhtiyaç duyulabileceğinden kapatıldı
        'no-process-exit': 'off',

        // https://eslint.org/docs/rules/no-restricted-modules
        // NOT: Modül yasaklamaya ihtiyaç olmadığından kapalı
        'no-restricted-modules': 'off',

        // https://eslint.org/docs/rules/no-sync
        // NOT: Zorluk yaratacağından kapatıldı
        'no-sync': 'off',
    },
};
