const cssnano       = require('cssnano');
const postcssnested = require('postcss-nested');
const postcssmixins = require('postcss-mixins');

module.exports = {
    plugins: [
        postcssmixins,
        postcssnested,
        cssnano({
            preset: 'default',
        }),
    ]
} 