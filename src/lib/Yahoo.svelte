<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Yahoo!"
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
  ><path d="m0 0H512V512H0" fill="#5f01d1" /><g fill="#fff"
    ><path d="M203 404h-62l25-59-69-165h63l37 95 37-95h62m58 76h-69l62-148h69" /><circle
      cx="303"
      cy="308"
      r="38"
    /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
