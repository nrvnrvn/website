module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatsby + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sri`,
      options: {
        hash: 'sha256', // 'sha256', 'sha384' or 'sha512' ('sha512' = default)
        crossorigin: false, // Optional
      },
    },
    // `gatsby-plugin-csp`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        // mergeScriptHashes: false,
        // mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          'base-uri': `'none'`,
          'default-src': `'none'`,
          'frame-ancestors': `'none'`,
          'manifest-src': `'self'`,
          'style-src': `'self' 'sha256-MtxTLcyxVEJFNLEIqbVTaqR4WWr0+lYSZ78AzGmNsuA=' 'sha256-o4LYhp5wtluJ8/NWUV2vi+r5AxmP8X2zEvYHCpji+kI='`,
          //   'script-src': `'self' 'unsafe-inline'`,
        },
      },
    },
  ],
};
