/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/data`,
      }
    },
    "gatsby-transformer-json",
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Noto Sans',
            variants: ['400', '400i', '700', '700i']
          },
        ]
      }
    },
  ],
  siteMetadata: {
    title: "Please Vote...",
    author: "Keishi Hashimoto"
  },
}
