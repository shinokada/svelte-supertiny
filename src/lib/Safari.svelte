<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Safari"
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
  ><path d="m0 0H512V512H0" {fill} /><radialGradient id="a"
    ><stop stop-color="#0bd" offset="0" /><stop offset="1" stop-color="#17d" /></radialGradient
  ><g transform="matrix(4 0 0 4 256 256)"
    ><g stroke="#eee" fill="none"
      ><circle r="52.5" fill="url(#a)" stroke-width="5" /><circle
        r="45"
        stroke-dasharray="1.25 8.175"
        stroke-dashoffset=".5"
        stroke-width="5.5"
      /><circle r="42.5" stroke-dasharray="1.25 7.65" stroke-dashoffset="5" stroke-width="10" /></g
    ><path d="M6 6l-12-12l-29 39" fill="#eee" /><path d="M6 6l-12-12l41-28" fill="#f55" /><path
      opacity=".3"
      d="M-35 33l7-5-3 5 37-27 28-35-4 2 4-6"
    /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
