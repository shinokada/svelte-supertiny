<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType;
  export let size: number = 24;
  export let role: string = 'img';
</script>

<svelte:component this={icon} {...$$restProps} {role} {size} class={$$props.class} />

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let icon: ComponentType;
@prop export let size: number = 24;
@prop export let role: string = 'img';
-->
