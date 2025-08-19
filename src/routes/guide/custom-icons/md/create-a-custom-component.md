<script lang="ts">
  import type { Component } from 'svelte';
  const config = {
    size: '30',
  };
  import { Icon } from 'svelte-supertiny';
  export let icon: Component;
</script>

<Icon {...config} {icon} />
