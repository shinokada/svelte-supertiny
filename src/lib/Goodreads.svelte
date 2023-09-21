<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Goodreads"
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
  ><path d="m0 0H512V512H0" fill="#ece9d4" /><path
    d="m253 309c67 0 91-52 91-103s-22-113-89-113-90 60-90 110 23 106 88 106m123 8c0 114-68 129-118 130s-114-21-117-81h33c19 45 69 64 112 49s52-41 55-116c-56 65-158 45-190-13s-25-141 14-183 125-61 176 8v-37h35"
    fill="#814910"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
