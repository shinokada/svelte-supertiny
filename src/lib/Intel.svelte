<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Intel"
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
  ><path d="m0 0H512V512H0" {fill} /><path fill="#0068b5" d="M55.2 173.6h31.5v31.5H55.2" /><path
    d="M56 224.2h30v113.6H56m47.5 0V224.2H133v16.4q11-15 28-18s52.4-9.5 55.4 47v68.2h-30.2v-61q-1-29-26-29s-27-1-27 32v58m151.2 1.2c-40.6 1-51-12-51.6-48V180h30v44.2h21.6v25.7h-21.6v42c.4 15 2 19.5 21.7 19.3m37-40.7c0-9 10.5-23 30-23s30 13 30.3 22.9m0 31.2c-13 16-52 21-60.5-10h89.2v-12c-2-50-49-66.7-82-52.8s-47 57-25 89 74 32.5 99.8 2.2m22.7 20V171.2h30V338"
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
