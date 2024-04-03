<script lang="ts">
  import { DocPage, MetaTag } from "svelte-icon-webkit";
  import type { Snippet } from "svelte";
  type MetaType = {
    title: string;
    description?: string;
    keywords?: string;
    url?: string;
    image?: string;
    imageAlt?: string;
    creator?: string;
  }
  interface Props {
    children: Snippet;
    meta: MetaType
  }
  let { children, meta }: Props = $props()

  // const meta = {
  //   title: 'Svelte SVG Icons - Svelte Supertiny',
  //   description: '340+ SVG logos for popular brands from SuperTinyIcons for Svelte.',
  //   keywords:'SuperTinyIcons, Svelte 5, Svelte 4, Runes, SvelteKit, SVG icons',
  //   url: 'https://svelte-supertiny.codewithshin.com/',
  //   image: 'https://open-graph-vercel.vercel.app/api/svelte-supertiny',
  //   imageAlt: 'Svelte Supertiny',
  //   creator: '@shinokada'
  // }
</script>

<MetaTag {...meta} />

<DocPage>
  {@render children()}
</DocPage>
