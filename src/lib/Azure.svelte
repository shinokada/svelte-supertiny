<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Azure"
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
  ><defs
    ><linearGradient id="c" x1="0.1" x2="0.6" y1="0" y2="1"
      ><stop offset="0" stop-color="#3ccbf4" /><stop
        offset="1"
        stop-color="#2892df"
      /></linearGradient
    ><linearGradient id="a" x1="0.5" y1="0.1" x2="0" y2="1"
      ><stop offset="0" stop-color="#114a8b" /><stop
        offset="1"
        stop-color="#0669bc"
      /></linearGradient
    ></defs
  ><path {fill} d="M0 0h512v512H0" /><path
    fill="url(#a)"
    d="M208.1 120.5h85.1l-88.3 261.7a13.6 13.6 0 01-12.9 9.2H125.8a13.5 13.5 0 01-12.8-17.9l82.3-243.8a13.6 13.6 0 0112.9-9.2z"
  /><path
    fill="#0078d4"
    d="M331.7 296.1H196.8a6.2 6.2 0 00-4.3 10.8l86.7 80.9a13.6 13.6 0 009.3 3.7h76.4z"
  /><path
    fill="url(#c)"
    d="M316.8 129.8a13.5 13.5 0 00-12.8-9.2h-94.8a13.5 13.5 0 0112.8 9.2l82.3 243.8a13.5 13.5 0 01-12.8 17.9h94.8a13.5 13.5 0 0012.8-17.9z"
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
