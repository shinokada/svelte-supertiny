<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="CoffeeScript"
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
    d="M114 137c-85 34 40 64 147 64s218-27 152-61c23 27-54 45-152 45s-181-21-147-48m65 120c-83-58-132 82-28 98c-127 40-99-152 9-115m-73-49c29 39 284 56 347 0c-22 123-64 114-83 184c-29 45-162 38-180 0c-12-53-57-60-84-184m121-63c21-13-47-20-47 4s46 36 85 11c20-13 59-23 76-14s-31 30-39 9c-26 4-14 22 18 22s46-6 47-22s-24-28-53-28c-58 0-65 29-98 32c-16 1-25-2-25-9s28-9 36-5"
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
