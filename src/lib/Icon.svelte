<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType;
  export let size: number = 24;
  export let role: string = 'img';
</script>

<svelte:component 
  {...$$restProps} 
  {role}
  this={icon} 
  {size}
  class={$$props.class} 
/>