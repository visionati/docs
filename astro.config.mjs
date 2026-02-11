import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.visionati.com',
  integrations: [
    starlight({
      title: 'Visionati Docs',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Visionati',
        replacesTitle: true,
      },
      favicon: '/favicon.ico',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
          },
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/visionati' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/visionatiapp' },
      ],
      customCss: [
        './src/fonts/font-face.css',
        './src/styles/custom.css',
      ],
      pagefind: true,
      sidebar: [
        {
          label: 'Getting Started',
          slug: 'getting-started',
        },
        {
          label: 'API Reference',
          autogenerate: { directory: 'api' },
        },
        {
          label: 'Browser Extension',
          autogenerate: { directory: 'browser-extension' },
        },
        {
          label: 'Content Analyzer',
          autogenerate: { directory: 'content-analyzer' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
