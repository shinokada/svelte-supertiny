<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Apereo Foundation"
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
    d="m231,96c-97,0-171,97-150,203 30,104 162,142 258,80-15-32 0-66-21-99-36,68-112,93-165,19-32-57 6-112 36-125 82-42 120,13 205-10 10-4 23-30 32-46-72,13-116-15-179-22z"
    fill="#344"
  /><path
    d="m313 191c27 4 57 4 80-4 10 95-21 122 40 226-19-10-42-15-48-15-6 4-17 11-23 17-65-74-36-175-51-224z"
    fill="#6bc"
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
