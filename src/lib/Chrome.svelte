<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Chrome"
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
  ><path d="m0 0H512V512H0" {fill} /><circle cx="256" cy="256" r="192" fill="#fcc11d" /><path
    d="m94 153a192 192 90 00162 295l82-142"
    fill="#289b48"
  /><path d="m89.72 160a192 192 90 01332.56 0H256l-82 146" fill="#e0392c" /><circle
    cx="256"
    cy="256"
    r="86"
    fill="#1a73e8"
    stroke="#fff"
    stroke-width="20"
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
