const { override, useBabelRc, useEslintRc } = require('customize-cra');

module.exports = override(useBabelRc(), useEslintRc('.eslintrc.js'), (config) => {
    config.module.rules[0].parser.requireEnsure = true;
    return config;
});
