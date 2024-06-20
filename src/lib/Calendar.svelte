<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Calendar"
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
  fill="#fff"
  font-family="monospace"
  ><path d="m0 0V512h512V0" fill="#dee" /><path d="m0 0V180h512V0" fill="#d34" /><path
    fill="#eab"
    d="m383.5 86a14 14 0 101 0h42a14 14 0 101 0h42a14 14 0 101 0zm0 43a14 14 0 101 0h42a14 14 0 101 0h42a14 14 0 101 0"
  /><text x="24.5" y="164" style="text-transform:uppercase" font-size="140">FEB</text><g
    fill="#677"
    text-anchor="middle"
    ><text font-size="256" x="256" y="400">29</text><text font-size="64" x="256" y="480"
      >Sunday</text
    ></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
