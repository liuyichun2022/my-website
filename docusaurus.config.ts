import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Artisan Bytes 工作室',
  tagline: 'ArtisanBytes 结合了“工匠精神”和“数据字节”，适用于注重细节和质量的技术项目或数据分析服务，欢迎交流、咨询合作。',
  favicon: 'img/favicon.ico',
  url: 'https://artisanbytes.cn',
  baseUrl: '/',
  organizationName: 'ArtisanBytes',
  projectName: 'my-website', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ArtisanBytes 工作室',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: '博客', 
          position: 'right',
          to: '/blog'
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: '项目',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: '技术笔记',
        },
        {
          label: '工具导航', 
          position: 'right',
          to: '/blog'
        },
        {
          label: '关于',
          position: 'right',
          to: '/blog'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            { label: '博客', to: '/docs/intro'},
            { label: '项目', to: '/docs/intro'},
            { label: '笔记', to: '/docs/intro'},
            { label: '工具导航', to: '/docs/intro'},
          ],
        },
        {
          title: '社交媒体',
          items: [
            { label: '关于我', to: '/about' },
            { label: 'GitHub', href: 'https://github.com/JasonExplorer' },
            { label: '掘金', href: 'https://juejin.cn/user/3096659615287703'},
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus'},
            { label: 'Twitter', href: 'https://twitter.com/docusaurus'},
          ],
        },
        {
          title: '更多',
          items: [
            { label: 'Blog', to: '/blog'},
            { label: 'GitHub', href: 'https://github.com/facebook/docusaurus'},
            { html: `
                <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                <a/>
                `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Artisan Bytes, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
