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
  aria-label="Rust"
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
  ><path d="m0 0H512V512H0" {fill} /><g transform="translate(256 256)"
    ><g id="d"
      ><g id="c"
        ><g id="b"
          ><path id="a" d="M20-183 6-206c-3-5-9-5-12 0l-14 23m0 366 14 23c3 5 9 5 12 0l14-23" /><use
            xlink:href="#a"
            transform="rotate(11.25)"
          /></g
        ><use xlink:href="#b" transform="rotate(22.5)" /></g
      ><use xlink:href="#c" transform="rotate(45)" /></g
    ><use xlink:href="#d" transform="rotate(90)" /><g id="f"
      ><path
        id="e"
        d="M-101-161a190 190 0 00-76 230l32-16a154 154 0 01-8-73l25-13c6-3 9-9 5-15l-11-26a155 155 0 0159-61m-88 82c5-16 29-7 24 8s-29 8-24-8"
      /><use xlink:href="#e" transform="rotate(72)" /></g
    ><use xlink:href="#f" transform="rotate(144)" /><use
      xlink:href="#e"
      transform="rotate(-72)"
    /><path
      d="M135 10s4 32-18 32-6-24-43-51c0 0 31-13 31-47s-40-48-57-48h-187v46h35v99h-52v49h160v-48h-39v-28h40c41 0 13 76 60 76h99v-80m-199-38v-30h54c22 0 23 30 0 30"
    /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
