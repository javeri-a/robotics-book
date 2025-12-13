// @ts-check
// `@type` JSDoc annotations allow IDEs and type checkers to type-check this file
// even if the project doesn't use TypeScript.

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Connecting digital AI to real robots',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://javeri-a.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<org-name>/<repo-name>/'
  baseUrl: '/physical-ai-humanoid-textbook/',

  // GitHub pages deployment config.
  organizationName: 'javeri-a', // Usually your GitHub org/user name.
  projectName: 'physical-ai-humanoid-textbook', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: undefined,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/javeri-a/physical-ai-humanoid-textbook/edit/main/',
        },
        blog: false, // Disable blog if not needed
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Physical AI Textbook',
        logo: {
          alt: 'Robot Logo',
          src: 'img/robot-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            type: 'dropdown',
            label: 'Modules',
            position: 'left',
            items: [
              {
                label: 'Module 1: ROS 2',
                to: '/docs/modules/module1-ros2/intro',
              },
              {
                label: 'Module 2: Digital Twin',
                to: '/docs/modules/module2-simulation/intro',
              },
              {
                label: 'Module 3: NVIDIA Isaac',
                to: '/docs/modules/module3-nvidia-isaac/intro',
              },
              {
                label: 'Module 4: VLA Systems',
                to: '/docs/modules/module4-vla/intro',
              },
              {
                label: 'Module 5: Capstone',
                to: '/docs/modules/module5-capstone/intro',
              },
            ],
          },
          {
            href: 'https://github.com/javeri-a/physical-ai-humanoid-textbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started/',
              },
            ],
          },
          {
            title: 'Modules',
            items: [
              {
                label: 'ROS 2 Basics',
                to: '/docs/modules/module1-ros2/intro',
              },
              {
                label: 'Digital Twin',
                to: '/docs/modules/module2-simulation/intro',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Citations',
                to: '/docs/reference/citations',
              },
              {
                label: 'Glossary',
                to: '/docs/reference/glossary',
              },
              {
                label: 'Troubleshooting',
                to: '/docs/reference/troubleshooting',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;