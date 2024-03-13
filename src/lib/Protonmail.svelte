<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Proton Mail"
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
  ><path d="m0 0H512V512H0" {fill} /><linearGradient id="protonmail" x1=".8" y1="1"
    ><stop offset="0" stop-color="#d8cbff" /><stop
      offset="1"
      stop-color="#9d7aff"
    /></linearGradient
  ><radialGradient id="b" cx="1.4" cy="0" r="1.6"
    ><stop offset=".6" stop-color="#6d4aff" /><stop
      offset="1"
      stop-color="#aa8eff"
    /></radialGradient
  ><path
    fill="url(#protonmail)"
    d="m84 184v-60c0-7 8-12 15-5l132 111c13 12 32 15 48 2l137-115c4-3 12-1 12 7v235a36 36 0 01-36 36h-60"
  /><path fill="url(#b)" d="M84 183v176a36 36 0 0036 36h235V168l-50 42-74 66s-17 13-36 0" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
