<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Yammer"
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
  ><path d="m0 0H512V512H0" {fill} /><path
    d="m326 260c1 9 60 16 100 14 19-1 18-31-1-32-19-2-100 9-99 18zm-25-45c5 8 61-15 95-36 16-10 1-36-17-28-17 8-83 57-78 64zm1 86c-4 7 43 45 77 65 17 9 33-17 17-28s-90-45-94-37z"
    fill="#265495"
  /><path
    d="m278 134-74 185-73-185m73 185-11 29s-14 38-58 30"
    fill="none"
    stroke="#265495"
    stroke-width="34"
    stroke-linecap="round"
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
