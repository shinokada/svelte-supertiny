<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Android"
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
    d="m434.5 342a176 176 0 00-91-140.4l29.7-51.5a6 6 0 10-10.7-6.2L332.4 196a187 187 0 00-152.8 0l-30.1-52.1a6 6 0 10-10.7 6.2l29.7 51.5A176 176 0 0077.5 342m96.3-50.9a14.9 14.9 0 11.1 0m164.3 0a14.9 14.9 0 11.1 0"
    fill="#3ddc84"
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
