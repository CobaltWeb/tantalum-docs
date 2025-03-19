import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Tantalum Docs',
  description: 'Documentation for Tantalum - Directus Nuxt Starter',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/overview.md' },
      { text: 'Demo', link: '/demo' },
    ],
    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Tech stack', link: '/tech-stack' },
          { text: 'Local setup', link: '/local-setup' },
        ],
      },
      {
        text: 'Features',
        items: [
          { text: 'Internalization (i18n)', link: '/features/internalization' },
          { text: 'Redirections', link: '/features/redirections' },
          { text: 'SEO + OG Tags', link: '/features/seo' },
          { text: 'Form builder', link: '/features/form-builder' },
          { text: 'Auto publishing', link: '/features/auto-publishing' },
          { text: 'Content versioning', link: '/features/content-versioning' },
          { text: 'Live preview', link: '/features/live-preview' },
          { text: 'Demo', link: '/features/demo' },
          // { text: 'Caching', link: '/features/caching' },
          // { text: 'Type support', link: '/features/type-safety' },
          // { text: 'CI/CD', link: '/seo' },
        ],
      },
      {
        text: 'Managing content',
        items: [
          { text: 'Content types', link: '/content-management/content-types' },
          { text: 'Blocks', link: '/content-management/blocks' },
          { text: 'Reusables', link: '/content-management/reusables' },
          { text: 'Components', link: '/content-management/components' },
          { text: 'Navigations', link: '/content-management/navigations' },
          { text: 'Forms', link: '/content-management/forms' },
          { text: 'SEO', link: '/content-management/seo' },
          { text: 'Languages', link: '/content-management/languages' },
          { text: 'Translations', link: '/content-management/translations' },
          { text: 'Redirecs', link: '/content-management/redirects' },
        ],
      },
      {
        text: 'Deployment',
        items: [
          { text: 'First deployment', link: '/overview' },
          { text: 'Next deployments', link: '/overview' },
          { text: 'Deploy to edge', link: '/overview' },
          { text: 'Directus cloud', link: '/overview' },
          { text: 'Staging/Test enviroment', link: '/overview' },
        ],
      },
      {
        text: 'Limitations',
        link: '/limitations',
      },
      {
        text: 'Troubleshooting',
        link: '/overview',
      },
      {
        text: 'FAQ',
        link: '/overview',
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
