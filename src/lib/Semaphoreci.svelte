<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="Semaphore CI"
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
    id="a"
    d="M448 235.4l-40 40.6-66.5-67.7a49.3 49.3 0 00-69.7 0l-52.7 53.6a19.4 19.4 0 01-27.5 0l-26.1-26.5 66.5-67.7a105.7 105.7 0 01149.5 0L381.5 167.8z"
  /><use xlink:href="#a" transform="rotate(180,255.9,256.1)" fill="#F16332" /><use
    xlink:href="#a"
    fill="#029D75"
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
