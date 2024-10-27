<script lang="ts">
  // import { filterStringKeys } from 'runes-webkit';
  import { H1 } from 'runes-webkit';
  import type { Component } from 'svelte';
  import * as icons from '$lib';
  import IconPage from './IconPage.svelte';
  import { Discord, Azure, Gatehub } from '$lib';
  // let keyIcons = $derived(filterStringKeys(icons))
  type ComponentEntry = [string, Component];
  const componentEntries = $derived(Object.entries(icons) as ComponentEntry[]);
</script>

<H1>Icons - Svelte Supertiny</H1>
<Discord class="hidden" />
<Azure class="opacity-0" />
<Gatehub class="hidden" />

<IconPage
  minSize="24"
  defaultSize="52"
  maxSize="80"
  div3Class="lg:grid-cols-3 md:grid-cols-2"
  icons={componentEntries}
  title="Svelte Supertiny Icons"
/>
