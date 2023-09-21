<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Access"
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
  ><path d="m0 0H512V512H0" fill="#155196" /><path
    fill="#fff"
    d="m422 357.5 10.7 25.3-68.7 27L311.6 287H183.9l-12.4-174.3a35 35 0 1133.8 17.7l4 70h89v32.7h-85.7l1.6 22 118.7-.8 50.7 117m-49.8 9.3A128.2 128.2 0 11165.6 206.7l2.9 37.9A93 93 0 10311 334"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
