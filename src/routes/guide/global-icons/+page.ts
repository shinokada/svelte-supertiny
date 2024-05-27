import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Setting Global Icon - Svelte Supertiny',
    description: 'Setting Global Icon using setContext with Svelte Supertiny',
    og: {
      title: 'Setting Global Icon - Svelte Supertiny',
      description: 'Setting Global Icon using setContext with Svelte Supertiny'
    },
    twitter: {
      title: 'Setting Global Icon - Svelte Supertiny',
      description: 'Setting Global Icon using setContext with Svelte Supertiny'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
