<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Lobste.rs"
  {role}
  width={size}
  height={size}
  {...$$restProps}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#ac130c" /><path
    d="m421 428.1h-308.6v-23.5c9.8-0.3 17.9-1.2 24.2-2.7 13-3.3 21.5-10.8 23.9-22.8 1.2-6.6 2.3-15.1 2.3-25.5v-199.8c-1.5-21.2-1.9-43.1-23.9-47.9-5.4-1.5-16-2.5-24.9-3.1v-21h170.6v21c-10.2 0.3-23.5 1.2-29.8 2.7-23.4 6.2-21.1 32.9-21 51.5v183.3c-0.9 33.9 8.8 51.8 41.2 57.6 23.3-0.2 44.1 0.4 64.9-3.4 21.6-4.4 39.6-18.9 48.4-36.6 4.8-9.8 10.6-33 10.6-45h22.2z"
    {fill}
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
