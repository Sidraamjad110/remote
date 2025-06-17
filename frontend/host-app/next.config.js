const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    output: 'export',
    basePath: '/remote',
    assetPrefix: isProd ? '/remote/' : '',
    trailingSlash: true,
}