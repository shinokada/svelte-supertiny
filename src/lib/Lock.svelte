<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Lock"
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
  ><path d="m0 0H512V512H0" fill="#29303d" /><g fill="#29303d"
    ><path stroke="#e0e4eb" stroke-width="32" d="M346 214v-37c0-123-180-123-180 0v37" /><rect
      fill="#ff0"
      height="210"
      rx="5%"
      width="280"
      x="115"
      y="210"
    /><circle cx="256" cy="296" r="28" /><path d="M262 296h-12l-16 69h44" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
