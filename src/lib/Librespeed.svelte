<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="LibreSpeed"
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
  ><path d="m0 0H512V512H0" /><linearGradient id="a" x2="0" y2=".53"
    ><stop offset=".56" stop-color="#00aeef" /><stop
      offset="1"
      stop-color="#1b75bc"
    /></linearGradient
  ><path
    d="m143 313a127 127 0 01152-180"
    fill="none"
    stroke="#d1d3d4"
    stroke-width="21.5"
    stroke-dasharray="33.4 11.2"
  /><path fill="url(#a)" stroke="#000" stroke-width="4" d="m256 103-22.5 151a5 7 0 0045 0z" /><path
    d="m64 255a192 192 0 110 2m33 0a159 159 0 100-2m102.2 84v16h16v-16h16.5v16h16v-16h16.5v16h16v-16h16.5v16h16v-16M247 256a9 9 0 100-.1"
    fill="#d1d3d4"
  /><path fill="#f7941d" d="m301 146q15 7 26 15l13-17q-15-11-31-18" /><path
    fill="#f15a29"
    d="m335 168q9 8 20 23l18-11q-9-15-23-28"
  /><path fill="#ef4136" d="m360 200q7 15 10 29l21-5q-3-17-12-34" /><path
    fill="#ed1c24"
    d="m372 239q2 15 0 31l21 2q3-17 0-36"
  /><path fill="#be1e2d" d="m370 280q-3 15-10 29l19 9q9-16 12-34" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
