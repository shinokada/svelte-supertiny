<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="JavaScript"
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
  ><path d="m0 0H512V512H0" fill="#f7df1e" /><path
    d="m324 370q17 29 45 29 35 0 35-27c0-11-15-21-39-31q-67-22-66-75c0-36 27-64 70-64q48 0 68 39l-37 24q-12-22-31-21-22 1-23 21c0 14 9 20 39 33 43 17 67 36 67 77q-3 65-79 67-63 0-89-49zm-170 4c8 13 13 25 33 25q24 0 24-30V203h48v164q-1 71-72 72-53-1-72-44z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
