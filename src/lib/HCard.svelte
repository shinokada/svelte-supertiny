<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="h-card"
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
  ><path d="m0 0H512V512H0" {fill} /><rect
    id="s"
    x="99.5"
    y="170"
    width="211.2"
    height="211.2"
    fill="#a3cc00"
    rx="41.5"
    stroke="#fff"
    stroke-width="19.2"
  /><use href="#s" x="76.75" y="-63.75" /><circle cx="282" cy="189.5" r="35.15" fill="#fff" /><path
    d="M224 269.65 c5-60 110-60 116 0Z"
    fill="#fff"
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
