<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Codeberg"
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
  ><path d="m0 0H512V512H0" {fill} /><linearGradient id="a" x2=".2" y2="1"
    ><stop offset=".16" stop-color="#fff" /><stop offset=".54" stop-color="#b8e1ff" /><stop
      offset="1"
      stop-color="#9cd4ff"
    /></linearGradient
  ><path fill="url(#a)" d="M332 440.2a192 192 0 0086.8-74.4L256 156" /><path
    fill="#2185d0"
    d="m418.6 365.8a192 192 0 10-325.3 0l160.1-207a3 3 0 015.2 0"
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
