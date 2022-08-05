const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' });
require('dotenv').config();

module.exports = withBundleAnalyzer({
    
    images: {
        domains: [
          'res.cloudinary.com',
        ],
    },
        
    env: {
        API_URL: process.env.API_URL
    },

    publicRuntimeConfig: {
        API_URL: process.env.API_URL
    },

    webpack: (config, {dev, isServer}) => {
        if(!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat',
            })
        }
        config.resolve.alias['components'] = path.join(__dirname,
            'components')
        config.resolve.alias['public'] = path.join (__dirname, 'public')

        return config
    },
});