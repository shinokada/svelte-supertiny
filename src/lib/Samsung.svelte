<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Samsung"
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
  fill="#117cad"
  ><path d="m0 0H512V512H0" fill="#034ea2" /><path
    {fill}
    d="m72 224c-16 0-23 5-22 20 3 12 25 19 27 23v4c0 2-1 4-5 4-4 0-6-3-6-5v-5h-16c-1 16 11 21 22 21 14 0 21-4 21-17 1-19-24-20-26-28v-3c0-1 1-4 5-4 4 0 5 3 5 5v4h15v-4c0-13-12-15-20-15m353 15v33c1 21 39 17 39 0v-20h-17v8h5v11c-1 5-13 5-13 0v-31c0-5 11-5 12 0v5h13v-6c-1-20-39-17-39 0m-160-15c-16 0-23 5-22 20 3 12 25 19 27 23v4c0 2-1 4-5 4-4 0-6-3-6-5v-5h-16c-1 16 11 21 22 21 14 0 21-4 21-17 1-19-24-20-26-28v-3c0-1 1-4 5-4 4 0 5 3 5 5v4h15v-4c0-13-12-15-20-15m-100 1-1 59h15v-53l11 53h15l9-53v53h15l-1-59h-24l-7 45-7-45zm135 0v45c1 11 9 15 21 15 11 0 20-4 20-15v-45h-15v46c0 2-1 4-6 4-4 0-6-2-6-4v-46zm-185 0-11 59h16l8-53 8 53h16l-11-59zm243 0v59h15v-48l15 48h21v-59h-15v47l-13-47z"
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
