module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve:'gatsby-source-contentful',
      options:{
        spaceId:"5m7zutz6hr7r",
        accessToken:"0372ba66ac4d3f3f4c52e74128762722a6acf1724fbf33db9c03bf6d1dd303fc",
        host:"cdn.contentful.com"
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `red`,
        // Disable the loading spinner.
        showSpinner: true,
        // color: `#191919`,
        minimum: 100,
        // trickle: false,
      },
    },
    'gatsby-plugin-react-helmet'],
};
