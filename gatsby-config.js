module.exports = {
  siteMetadata: {
    title `steel-template-gatsby`,
    //must be the url your frontend is deployed to!!!
    siteUrl: "https://steel-studio-gatsby-86mbreiz.netlify.app/",
    description:
      "Steel is a sudo framework for headless ecommerce utilizing Snipcart & Sanity ",
    author: "stordahl",
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey:
          "YjNmNDQ3MTYtYjRlZC00ZWEzLWIzNzUtZDBhMjU0MDE5MTU5NjM3NDkzMjY3NDQ1MzEzOTAx",
        autopop: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `steel-template-gatsby`,
        short_name: `stg`,
        start_url: `/`,
        background_color: `bg`,
        theme_color: `darkBlue`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `igl5lycm`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token:
          "skZKsr8wVmEATcMEVWfg5xUzZVPOw50oByJDtDH9Xp6L79SjbiLeyFVtI8UKDK7nm1SQWffGRKYQNGm04z7Z1i2CCMlMmqyiV2ahQnrhVx3cnMSt2KXuZbCY7BkECJhCnPafjCb2JQjDTiVjnMWfK2QrRmvpsJC6VaX3LIX6mqtOkBmOk0T5",

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
  ],
}
