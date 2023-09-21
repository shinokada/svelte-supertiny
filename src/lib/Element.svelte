<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Element"
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
  ><path d="m0 0H512V512H0" fill="#fff" /><circle cx="256" cy="256" r="192" fill="#0dbd8b" /><path
    d="m153.2 277.1c0.5-46.4 37.8-81.6 81.6-81.6m0-42.3c46.4 0.5 81.6 37.8 81.6 81.6m42.3 0c-0.5 46.4-37.8 81.6-81.6 81.6m0 42.3c-46.4 0-81.6-37.8-81.6-81.6"
    fill="none"
    stroke="#fff"
    stroke-linecap="round"
    stroke-width="28.155"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
