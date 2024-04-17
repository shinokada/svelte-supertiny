<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: "40",
    role: "presentation"
  };
  import { IconSolid } from 'svelte-supertiny';
  export let icon: ComponentType;
</script>

<IconSolid {...config} {icon} />