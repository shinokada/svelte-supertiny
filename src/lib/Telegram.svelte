<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Telegram"
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
  ><path d="m0 0H512V512H0" {fill} /><linearGradient id="telegram" x2="0" y2="1"
    ><stop offset="0" stop-color="#2aabee" /><stop
      offset="1"
      stop-color="#229ed9"
    /></linearGradient
  ><path
    d="m255 64a192 192 0 102 0m-55 215c-14 9-22 8-34 5s-21-6-33-10-16-13 5-21q167-73 194-81c19-6 24 2 22 17q-7 60-24 151c-3 17-11 31-36 14l-62-42q-14-10-5-20c13-15 36-33 67-65q5-5 3-8t-8 1"
    fill="url(#telegram)"
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
