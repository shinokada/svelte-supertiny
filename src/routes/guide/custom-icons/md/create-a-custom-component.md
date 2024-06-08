<script lang="ts">
  import type { Component } from 'svelte';
  const config = {
    size: "40",
    role: "presentation"
  };
  import { IconSolid } from 'svelte-supertiny';
  export let icon: Component;
</script>

<IconSolid {...config} {icon} />