<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="YouTube"
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
  ><path d="m0 0H512V512H0" /><path
    d="m427,169c-4-15-17-27-32-31-34-9-239-10-278,0-15,4-28,16-32,31-9,38-10,135 0,174 4,15 17,27 32,31 36,10 241,10 278,0 15-4 28-16 32-31 9-36 9-137 0-174zm-207,140v-106l93,53z"
    fill="#ed1d24"
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
