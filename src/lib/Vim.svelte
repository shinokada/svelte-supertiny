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
  aria-label="Vim"
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
  ><path d="m0 0H512V512H0" {fill} /><g transform="matrix(5.75 0 0 5.75 83.5 83.5)"
    ><path d="m30 0-30 30 30 30 30-30z" fill="#007f00" stroke="#000" stroke-width=".8" /><g
      fill="#bfbfbf"
      ><g stroke="#000" stroke-width="2.5"
        ><path
          id="a"
          d="m8 5-2 2v4l2 1h2v40l3 2h3l43-44v-3l-2-2h-17l-2 2v4l2 1h2l-1 1-17 16v-17h2l2-1v-4l-2-2z"
        /></g
      ><use xlink:href="#a" /><g stroke="#000" stroke-width="2.5"
        ><path
          id="b"
          d="m31 36h3v3h-3zm-.5 6-.5-1h4l-4 11.5h1v1.5h-5v-1.5h1zm7.5-1h5l1 1 1-1h4l1 1 1-1h5l1 1v3l-3 7.5h1v1.5h-5v-1.5h1l3-7.5h-5l-3 7.5h1v1.5h-5v-1.5h1l3-7.5h-5l-3 7.5h1v1.5h-5v-1.5h1l3.5-10.5z"
        /></g
      ><use xlink:href="#b" /></g
    ></g
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
