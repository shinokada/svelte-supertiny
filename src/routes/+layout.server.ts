import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID_ICONS_TWO } from '$env/static/private';

const title = 'Svelte Supertiny';
const description = '340+ Svelte SVG Supertinyicons components';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-supertiny';
const keywords = 'svelte, sveltekit, runes, Supertiny icons, svg icons, icons';

export const load = ({ url }) => {
  const layoutMetaTags: MetaProps = {
    title,
    description,
    keywords,
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title,
      description,
      image: imgUrl,
      imageAlt: title
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image: imgUrl,
      imageAlt: title,
      siteName: title,
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID_ICONS_TWO
  };
};
