<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Gmail"
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
  ><path d="m0 0H512V512H0" {fill} /><path fill="#f2f2f2" d="M120 392V151.075h272V392" /><path
    fill-opacity=".05"
    d="M256 285L120 392l-4-212"
  /><path fill="#d54c3f" d="M120 392H97c-12 0-22-10-22-23V143h45z" /><path
    fill-opacity=".08"
    d="M317 392h77V159H82"
  /><path fill="#f2f2f2" d="M97 121h318L256 234" /><path
    fill="#b63524"
    d="M392 392h23c12 0 22-10 22-23V143h-45z"
  /><path
    fill="none"
    stroke="#de5145"
    stroke-linecap="round"
    stroke-width="44"
    d="M97 143l159 115 159-115"
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
