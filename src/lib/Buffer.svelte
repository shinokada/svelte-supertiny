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
  aria-label="Buffer"
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
  {fill}
  ><path d="m0 0H512V512H0" fill="#000" /><path
    d="M84 166q-7.5-4.5 0-9l162-75q10-4.5 20 0l162 75q7.5 4.5 0 9l-162 75q-10 4.5-20 0z"
  /><path
    id="a"
    d="M84 251q-7.5 5 0 10l162 75q10 3 20 0l162-75q7.5-5 0-10l-32-14q-10.5-4.5-21 0l-109 50q-10 4.5-20 0l-109-50q-10.5-4.5-21 0z"
  /><use transform="translate(0 94)" xlink:href="#a" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
