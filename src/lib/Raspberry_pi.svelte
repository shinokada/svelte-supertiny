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
  aria-label="Raspberry Pi"
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
  fill="#c51a4a"
  ><path d="m0 0H512V512H0" {fill} /><g transform="scale(2)"
    ><g id="a"
      ><path
        fill="#000"
        d="M129 63c-8-20-15-19-20-19q-4-5-13-2-6.5-4-12 0c-3-3-8-1-9 2q-6-2-9 2c-9-1-8 8-7 9q-3 5 0 9-2 4.5 3 8-2 5.5 5 8 .5 7 7 8-1 3.5 9 7-19.5 9-18 32-26 20-7 46 6 34 24 39 2.5 4.5 21 11 9 11 26 11"
      /><path
        fill="#6cc04a"
        d="M74 52l-4-4 12 2-3-4 9 3-2-4 9 4v-4l9 6v-5l8 7v-4q19.5 20.5 4 29Q97.5 63.5 79 58q25 13 35 24-5.5 14-30 9l3-3-9-2 3-2-9-4h6l-9-6h6l-9-6h5l-8-6 5-2-5-7"
      /><path
        d="M69 133c-19 9-9 34-3 37s15-42 3-37m35-34c7 2-30 32-31 26q-.5-28.5 31-26m-5 65c-29-3-19-44 6-44s22 44-6 44m-26 8c-9 6 3 43 26 35 9-7-8-43-26-35"
      /></g
    ><use xlink:href="#a" transform="matrix(-1 0 0 1 256 0)" /><path
      d="M106 216c17 24 45 5 44-2s-39-9-44 2m45-35c0-28-45-27-45 0s43 28 45 0m-43-75c5-15 34-15 40-1s-37 19-40 1"
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
