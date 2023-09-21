<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Signal"
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
  ><path d="m0 0H512V512H0" fill="#3a76f0" /><path
    d="M256 100a156 156 0 00-132 239l-15 64 64-15a156 156 0 1083-288z"
    fill="#fff"
  /><path
    fill="none"
    stroke-dasharray="54.5,17"
    stroke="#fff"
    stroke-width="18"
    d="M403 147A183 183 0 0097 346l-18 76c0 3 0 6 3 8a9 9 0 008 3l76-18A183 183 0 00402 146M79 422c0 3 0 6 3 8a9 9 0 008 3"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
