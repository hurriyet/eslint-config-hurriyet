module.exports = {
    rules: {
        // https://eslint.org/docs/rules/strict
        // NOT: babel build aşamasında 'use strict' eklediğinden bu satırın eklenmesi gereksiz olur bu nedenle yazımı engellendi
        strict: ['error', 'never'],
    },
};
