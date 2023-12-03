/** @type {import('next').NextConfig} */
const path = require('path')
const withNextIntl = require('next-intl/plugin')();


const nextConfig = withNextIntl({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    }
})
module.exports = nextConfig
