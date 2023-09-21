<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Google Assistant"
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
  ><path d="m0 0H512V512H0" fill="#fff" /><circle
    cx="190.8"
    cy="198.2"
    fill="#4285f4"
    r="102.2"
  /><circle cx="402.7" cy="208.2" r="20.8" fill="#34a853" /><circle
    cx="344.5"
    cy="259.5"
    r="42"
    fill="#ea4335"
  /><circle cx="344.4" cy="366.1" r="49.9" fill="#fbbc05" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
