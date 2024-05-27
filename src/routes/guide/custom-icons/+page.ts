import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Custom icons example - Svelte Supertiny',
    description: 'How to create a custom icons with Svelte Supertiny',
    og: {
      title: 'Custom icons example - Svelte Supertiny',
      description: 'How to create a custom icons with Svelte Supertiny'
    },
    twitter: {
      title: 'Custom icons example - Svelte Supertiny',
      description: 'How to create a custom icons with Svelte Supertiny'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
