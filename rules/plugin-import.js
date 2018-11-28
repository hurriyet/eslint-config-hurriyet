module.exports = {
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx',
                    'json',
                ],
            },
        },
        'import/extensions': ['.js', '.jsx'],
        'import/core-modules': [],
        'import/ignore': ['node_modules', '\\.(scss|css|less|svg|json)$'],
    },
    rules: {
        // Static analysis

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
        'import/named': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
        // NOT: CommonJS modüllerinde hata verdiğinden bu seçenek kapalı
        'import/default': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        // NOT: Stabil çalışmadığı rapor edildiğinden kapalı
        'import/namespace': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
        // NOT: Proje klasör yapıları birbirinden farklı olduğundan default halde kullanılması mümkün görünmüyor
        'import/no-restricted-paths': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
        'import/no-absolute-path': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        'import/no-dynamic-require': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
        'import/no-internal-modules': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
        'import/no-webpack-loader-syntax': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
        'import/no-self-import': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
        'import/no-cycle': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
        'import/no-useless-path-segments': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
        // NOT: Güncel klasör yapısını buna uydurmak zor olduğundan bu seçenek kapalı
        'import/no-relative-parent-imports': 'off',


        // Helpful warnings

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        'import/export': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
        'import/no-named-as-default': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
        'import/no-named-as-default-member': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
        // NOT: Bu seçenek henüz geliştirme aşamasında olduğundan bug riskine karşı kapalı
        'import/no-deprecated': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // NOT: Test yazımında bu paketlere ihtiyaç olabilir, bu nedenle kapalı
        'import/no-extraneous-dependencies': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
        'import/no-mutable-exports': 'error',

        // Module systems

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
        // NOT: export komutu olmayan scriptlerin bundle'a dahil edilebileceği senaryolar düşünülerek kapalı
        'import/unambiguous': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        // NOT: test yazarken ihtiyaç duyulabileceği için kapalı
        'import/no-commonjs': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        'import/no-amd': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        // NOT: Test yazarken ihtiyaç duyulabilir, bu nedenle kapalı
        'import/no-nodejs-modules': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
        'import/first': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
        'import/exports-last': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'import/no-duplicates': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
        'import/no-namespace': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
            },
        ],

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        'import/order': [
            'error',
            {
                groups: [
                    [
                        'builtin',
                        'external',
                        'internal',
                    ],
                ],
            },
        ],

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
        'import/newline-after-import': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        'import/prefer-default-export': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
        // NOT: bağlılık sayısından ziyate bundle boyutu önemli olabilir, bu nedenle kapalı
        'import/max-dependencies': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
        // NOT: İhtiyaç duyulabileceğinden kapalı
        'import/no-unassigned-import': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
        'import/no-named-default': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
        // NOT: prefer-default-export ayarıyla çakışıyor, bu nedenle kapalı
        'import/no-default-export': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
        // NOT: Kullanılabilir bir yöntem olduğundan kapalı
        'imprt/no-named-export': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
        // NOT: Sık kullanılan bir yöntem, bu nedenle kapalı
        'import/no-anonymous-default-export': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
        'import/group-exports': 'error',


        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
        'import/dynamic-import-chunkname': [
            2,
            {
                importFunctions: ['dynamicImport'],
                webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
            },
        ],
    },
};
