<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="Briar"
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
  fill="#87c214"
  ><path d="m0 0H512V512H0" fill="#fff" /><g id="b"
    ><path
      id="a"
      d="m145.7 134.5V100a27.4 27.8-3 0127.4-27.8H186a27.4 27.8-3 0127.4 27.8v34.5m0 89.5v185.2c0 15-12.4 27.4-27.4 27.4h-12.9a27.4 27.4 0 01-27.4-27.4V224"
    /><use xlink:href="#a" transform="rotate(180 256 256)" /></g
  ><use xlink:href="#b" fill="#95d220" transform="rotate(90 256 256)" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
