<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="Instagram"
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
  ><path d="m0 0H512V512H0" id="b" /><use fill="url(#instagram)" xlink:href="#b" /><use
    fill="url(#c)"
    xlink:href="#b"
  /><radialGradient id="instagram" cx=".4" cy="1" r="1"
    ><stop offset=".1" stop-color="#fd5" /><stop offset=".5" stop-color="#ff543e" /><stop
      offset="1"
      stop-color="#c837ab"
    /></radialGradient
  ><linearGradient id="c" x2=".2" y2="1"
    ><stop offset=".1" stop-color="#3771c8" /><stop
      offset=".5"
      stop-color="#60f"
      stop-opacity="0"
    /></linearGradient
  ><g fill="none" stroke="#fff" stroke-width="30"
    ><rect width="308" height="308" x="102" y="102" rx="81" /><circle
      cx="256"
      cy="256"
      r="72"
    /><circle cx="347" cy="165" r="6" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
