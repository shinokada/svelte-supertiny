<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Finder"
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
  ><path d="m0 0H512V512H0" fill="url(#b)" /><linearGradient id="a" x2="0" y1="1"
    ><stop offset="0" stop-color="#1e73f2" /><stop
      offset="1"
      stop-color="#19d3fd"
    /></linearGradient
  ><linearGradient id="b" x2="0" y1="1"
    ><stop offset="0" stop-color="#dbe9f4" /><stop
      offset="1"
      stop-color="#f7f6f6"
    /></linearGradient
  ><path fill="url(#a)" d="m0 0h262q-65 162-64 286c0 7 6 13 13 13h64q-6 113 28 213H0M198 286" /><g
    fill="none"
    stroke="#222"
    stroke-linecap="round"
    ><path stroke-width="21" d="m133.5 157.5v34m226.5-34v34" /><path
      stroke-width="17"
      d="m394 345c-55 81-241 81-295.5 0"
    /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
