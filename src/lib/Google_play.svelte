<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Google Play"
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
  ><path d="m0 0H512V512H0" {fill} /><path
    fill="#fbbc04"
    d="m336 333h-77V179h77l72 42a40 40 0 011 70"
  /><path fill="#34a853" d="m109 108c5-25 35-41 61-25l166 96-78 78" /><path
    fill="#ea4335"
    d="m170 429c-26 16-56 0-61-25l150-148 77 77"
  /><path fill="#4285f4" d="m109.3 106.4Q108 112 108 116v280q0 5 1.3 9.7L259 256" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
