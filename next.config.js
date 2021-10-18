/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const path = require('path')

module.exports = nextTranslate({
    env: {
        PUBLIC_URL: '/static/',
    },
    webpack: (config, { isServer, webpack }) => {
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
})