<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Citrix"
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
    d="M82 259c0-27 18-45 43-45 28-1 38 19 38 25s-8 8-11 1c-4-10-14-17-26-17-19 0-33 15-33 36s13 35 32 35c13 0 22-6 27-19 3-6 11-4 11 2 0 9-12 27-38 27-25 0-43-18-43-45M323 221a1 1 0 0110 0v76a1 1 0 01-10 0zm-17 6c-3 0-4-3-13-3-12 0-19 10-19 23v50a1 1 0 01-11 0v-76a1 1 0 0111 0v2c5-6 12-10 20-10 6 0 12 2 15 4 5 3 2 10-3 10m-79 70a1 1 0 01-11 0V192a1 1 0 0111 0v24h19a1 1 0 010 10h-19zm-45-76a1 1 0 0111 0v76a1 1 0 01-11 0zm208 45-29 35a1 1 0 01-8-7l31-35-30-35a1 1 0 018-7l29 34 29-34a1 1 0 017 7l-30 35 31 35a1 1 0 01-8 7z"
  /><circle cx="390.5" cy="194.5" r="8.7" /><circle cx="187.8" cy="194.5" r="8.7" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
