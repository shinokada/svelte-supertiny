<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Stitcher"
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
  ><path d="m0 0H512V512H0" fill="#fff" /><path fill="#3590c5" d="M56 205h70v127H56z" /><path
    fill="#c53827"
    d="M386 198h70v117h-70z"
  /><path fill="#ec8b24" d="M304 172h70v152h-70z" /><path
    fill="#fbc618"
    d="M222 194h70v146h-70z"
  /><path fill="#612268" d="M139 182h70v141h-70z" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
