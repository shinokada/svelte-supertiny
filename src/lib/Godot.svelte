<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="Godot"
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
  ><path d="m0 0H512V512H0" {fill} /><g id="a"
    ><path
      d="m257 435c-83 0-168-23-169.5-87V218Q77 205 64 184.5q13-22 34.4-45.1 18 9 34.1 19.8 19-17 36.5-26.6-2.6-18-3.2-42.1Q189 79 217 73q10 17 19 37 9-1.7 21-1.6v135.3a12 11 0 00-13 11v34.5a12 11 0 0013 11m-90-78.6a37.6 37.6 0 101 0"
      fill="#478cbf"
    /><circle cx="171.1" cy="261.4" r="25" fill="#414042" /><path
      d="m86.7 326.3 63 6.1 2.3 33.3 66.4 4.8 4.7-31.6h35"
      fill="none"
      stroke="#fff"
      stroke-linejoin="round"
      stroke-width="13.4"
    /></g
  ><use xlink:href="#a" transform="matrix(-1 0 0 1 512 0)" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
