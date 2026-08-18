// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BrainBase Wiki',
  tagline: 'Det foretrukne nettverket for selvstendige konsulenter',
  url: 'https://brainbase-wiki.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BrainBaseNo/brainbase-wiki/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BrainBaseNo/brainbase-wiki/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB']
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'BrainBase Wiki',
        logo: {
          alt: 'BrainBase AS',
          src: 'img/brain-green-64.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'consultant-wiki/index',
            position: 'left',
            label: 'Konsulentwiki',
          },
          {
            type: 'doc',
            docId: 'network-contributions/index',
            position: 'left',
            label: 'Bidra i nettverket',
          },
          {
            type: 'doc',
            docId: 'meetups/index',
            position: 'left',
            label: 'Meetups',
          },
          {href: 'https://blogg.brainbase.no', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/BrainBaseNo/brainbase-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wiki',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://brainbaseteam.slack.com'
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/brainbase',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/brainbaseno',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blogg.brainbase.no',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/brainbaseno/brainbase-wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BrainBase network. Built with Docusaurus. Images from blush.design`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
