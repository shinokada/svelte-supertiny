<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Gitpod"
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
  ><path d="m0 0H512V512H0" {fill} /><linearGradient id="a" x1=".79" y1=".16" x2=".21" y2=".84"
    ><stop offset="0" stop-color="#ffb45b" /><stop
      offset="1"
      stop-color="#ff8a00"
    /></linearGradient
  ><path
    d="m237 69a1 1 60 0137 66l-111 64q-5 3-5 9v101q0 6 5 9l88 51q5 3 10 0l88-51q5-3 5-9v-63l-80 45a1 1 0 01-37-66l115-64c34-20 77 5 77 45v111c0 25-13 50-37 63l-101 58c-22 13-49 13-71 0l-101-58c-23-14-36-38-36-63V200c0-26 13-50 36-63"
    fill="url(#a)"
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
