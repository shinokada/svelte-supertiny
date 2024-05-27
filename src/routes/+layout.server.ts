import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID } from '$env/static/private';

export const load = ({ url }) => {
  const layoutMetaTags: MetaProps = {
    title: 'Svelte Supertiny',
    description: '340+ Svelte SVG Supertinyicons components',
    keywords: 'svelte, sveltekit, runes, Supertiny icons, svg icons, icons',
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title: 'Svelte Supertiny',
      description: '340+ Svelte SVG Supertinyicons components',
      image: 'https://open-graph-vercel.vercel.app/api/svelte-supertiny',
      imageAlt: 'Svelte Supertiny'
    },
    og: {
      type: 'website',
      title: 'Svelte Supertiny',
      description: '340+ Svelte SVG Supertinyicons components',
      url: url.href,
      image: 'https://open-graph-vercel.vercel.app/api/svelte-supertiny',
      imageAlt: 'Svelte Supertiny',
      siteName: 'Svelte Supertiny',
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
};
