module.exports = {
  siteMetadata: {
    title: `Ruhee Safiya`,
    description: `Safiya's personal website.`,
    keywords: [`gatsby`, `blog`],
    author: `Ruhee Safiya`,
    siteUrl: `https://ruheesafiya.site`,
    menuLinks: [
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Work`,
        link: `/work`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `safiyaruhee@gmail.com`,
        location: `header`,
      },
      {
        name: `Twitter`,
        link: `https://www.twitter.com/safiyaruhee`,
        location: `header`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-lithium`,
      options: {
        // Core theme
        remarkImagesWidth: 1920,
        // Blog theme
        excerptLength: 140,
        // Lithium theme
        useHero: true,
        // Header Theme
        useStickyHeader: true,
        useHeaderSocialLinks: true,
        useColorMode: true,
        // Footer Theme
        useFooterSocialLinks: false,
        footerContentLocation: `right` // "left", "right" or "center"
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
