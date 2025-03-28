import type { MetaProps } from 'runes-meta-tags';

const title = 'Icons - Svelte Supertiny';
const description = 'Easily Find & Copy SVG Icon name for Your Project';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-supertiny';

export const load = ({ url }) => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl,
      url: url.href
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  };
  return { pageMetaTags };
};
