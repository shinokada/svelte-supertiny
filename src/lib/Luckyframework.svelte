<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Lucky Framework"
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
  ><path d="m0 0H512V512H0" fill="#fff" /><radialGradient
    id="luckyframework"
    cx="7.25"
    cy="4"
    r="7.73"
    ><stop offset=".975" stop-color="#9cfd65" /><stop offset=".975" stop-color="#34db96" /><stop
      offset="1"
      stop-color="#34db96"
    /><stop offset="1" stop-color="#1b92b1" /></radialGradient
  ><path
    stroke="url(#a)"
    stroke-linejoin="round"
    stroke-width="150"
    d="M146.1 351.1H366L256 161z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
