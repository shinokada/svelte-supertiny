<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Edge"
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
  ><path d="m0 0H512V512H0" {fill} /><radialGradient id="a"
    ><stop offset=".8" stop-color="#159" /><stop offset="1" stop-color="#148" /></radialGradient
  ><radialGradient id="b" cy=".7" r=".7"
    ><stop offset=".8" stop-color="#18d" /><stop offset="1" stop-color="#07a" /></radialGradient
  ><radialGradient id="c" cx=".1" cy=".2" r="1"
    ><stop offset=".4" stop-color="#3ce" /><stop offset="1" stop-color="#3c5" /></radialGradient
  ><radialGradient id="d" cx=".9"
    ><stop offset="0" stop-color="#6e7" /><stop
      offset="1"
      stop-color="#6e7"
      stop-opacity="0"
    /></radialGradient
  ><path
    d="m233 214s-25 12-25 42a133 112 0 00202 94 6 6 0 019 7C316 514 90 454 187 237"
    fill="url(#a)"
  /><path
    d="m300 153H94a192 192 0 00220 286 116 120.3-2 01-74-228 48 49 0 0164 41"
    fill="url(#b)"
  /><path
    d="m64 253c11-237 336-250 383-45 12 95-76 132-147 102-37-23 23-18-3-88-47-107-229-79-233 31"
    fill="url(#c)"
  /><path d="m242 58c251 14 262 290 86 248" fill="url(#d)" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
