<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Bing"
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
  ><path d="m0 0H512V512H0" {fill} /><linearGradient id="a" x2="0" y2="1"
    ><stop offset="0" stop-color="#3bc0f6" /><stop offset=".5" stop-color="#3693fa" /><stop
      offset="1"
      stop-color="#1b42d8"
    /></linearGradient
  ><linearGradient id="b"
    ><stop offset="0" stop-color="#5fe9ff" /><stop offset=".5" stop-color="#4bb1f1" /><stop
      offset="1"
      stop-color="#1440df"
    /></linearGradient
  ><radialGradient id="c" cx="1" cy=".7" r="1"
    ><stop offset="0" stop-color="#6adfd4" /><stop offset=".5" stop-color="#15d2e5" /><stop
      offset="1"
      stop-color="#36befe"
    /></radialGradient
  ><path d="m143 343c0 72 84 124 147 84l62-39c51-32 23-79-6-88l-115 69" fill="url(#b)" /><path
    d="m167 71c-11-8-24 0-24 11v261c0 38 39 56 67 39l21-13V134q-1-21-22-35"
    fill="url(#a)"
  /><path
    d="m279 186c-13-7-26 7-19 20l26 67q5 9 15 13c43 16 58 15 71 35s6 43-5 55c42-44 37-127-30-160"
    fill="url(#c)"
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
