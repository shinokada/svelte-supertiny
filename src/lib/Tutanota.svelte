<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Tutanota"
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
    d="m113 97c-17 0-31 14.1-31.5 31.5v290.5c0 1.1 0.1 2.2 0.2 3.3a1700 1700 0 0 0 37-14c91-36 165-67 165-102 0-1.1-0.1-2.2-0.2-3.4-4.7-34.5-87.2-45-87-61 0-0.8 0.2-1.7 0.8-2 9-17 49-16 63-17s48-1 50-11.3c0-0.3 0.1-0.6 0.1-1 0-9-23-13-23-13s28 4 28 15c0 0.5-0.1 1.1-0.2 1.7-3.1 11-28 14-44 14-15.6 0.8-39 2-39 10.2-0 0.4 0.1 0.9 0.2 1 3 11 90 16 146 45 32 16 48 44 55 73v-229.5c0-17-14-31-31-31h-289.4z"
    fill="#a01e20"
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
