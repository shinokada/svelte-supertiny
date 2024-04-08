<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { IconPage, filterStringKeys } from 'svelte-icon-webkit'
  import * as icons from '$lib'
  import Meta from '../utils/Meta.svelte'

  const keyIcons = filterStringKeys(icons);
  const title = 'Icons: Svelte Supertiny'
</script>

<Meta {title}/>

<IconPage icons={keyIcons as ComponentType} threeTabs={false} title="Icons: Svelte Supertiny" />