<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="GateHub"
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
  fill="#232323"
  ><path d="m0 0H512V512H0" /><g id="g"
    ><circle cx="83" cy="256" r="36" stroke="#f7f6f2" stroke-width="15" fill="none" /><rect
      x="169"
      y="250"
      width="88"
      height="13"
      fill="#9d9fa7"
    /></g
  ><use xlink:href="#g" transform="rotate(120 256 256)" /><use
    xlink:href="#g"
    transform="rotate(240 256 256)"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
