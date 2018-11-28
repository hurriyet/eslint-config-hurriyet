module.exports = {
    extends: [
        './rules/best-practices',
        './rules/possible-errors',
        './rules/strict-mode',
        './rules/nodejs-commonjs',
        './rules/stylistic-issues',
        './rules/variables',
        './rules/ecmascript-6',
        './rules/plugin-import',
    ].map(require.resolve),
    env: {
        es6: true,
        browser: true,
        node: true,
        jquery: true,
    },
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
    },
    plugins: [
        "import"
    ],
};