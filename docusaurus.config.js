// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes: prismThemes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BrainBase Wiki",
  tagline: "Det foretrukne nettverket for selvstendige konsulenter",
  url: "https://wiki.brainbase.no",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/BrainBaseNo/brainbase-wiki/tree/main/",
        },
        // The network's blog lives at https://www.brainbase.no/blogg, so the
        // built-in Docusaurus blog is disabled.
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // indexBlog: the built-in blog is disabled, and the plugin errors if it
        // is told to index a blog that does not exist.
        indexBlog: false,
        // lunr's Norwegian stemmer ("no"); defaults to English otherwise.
        language: "no",
      },
    ],
  ],
  i18n: {
    defaultLocale: "nb",
    locales: ["nb"],
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "BrainBase Wiki",
        logo: {
          alt: "BrainBase AS",
          src: "img/brain-green-64.png",
        },
        items: [
          {
            type: "doc",
            docId: "consultant-wiki/index",
            position: "left",
            label: "Konsulentwiki",
          },
          {
            type: "doc",
            docId: "network-contributions/index",
            position: "left",
            label: "Bidra i nettverket",
          },
          {
            type: "doc",
            docId: "meetups/index",
            position: "left",
            label: "Meetups",
          },
          {
            href: "https://www.brainbase.no/blogg",
            label: "Blogg",
            position: "left",
          },
          {
            href: "https://github.com/BrainBaseNo/brainbase-wiki",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Wiki",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://brainbaseteam.slack.com",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/brainbase",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/brainbaseno",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blogg",
                href: "https://www.brainbase.no/blogg",
              },
              {
                label: "GitHub",
                href: "https://github.com/brainbaseno/brainbase-wiki",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BrainBase network. Built with Docusaurus. Images from blush.design`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
