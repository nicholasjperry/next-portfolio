const path = require('path')
require('dotenv').config()

module.exports = {

    images: {
        domains: ["res.cloudinary.com"],
    },
        
    env: {
        API_URL: process.env.API_URL
    },

    publicRuntimeConfig: {
        API_URL: process.env.API_URL
    },

    webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname,
            'components')
        config.resolve.alias['public'] = path.join (__dirname, 'public')

        return config
    }
}