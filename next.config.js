/** @type {import('next').NextConfig} */
const path = require('path')
const withNextIntl = require('next-intl/plugin')();


const nextConfig = withNextIntl({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
})
module.exports = nextConfig
