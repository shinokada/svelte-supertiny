<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Mastodon"
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
  {fill}
  ><path d="m0 0H512V512H0" /><linearGradient id="a" y2="1"
    ><stop offset="0" stop-color="#6364ff" /><stop
      offset="1"
      stop-color="#563acc"
    /></linearGradient
  ><path
    fill="url(#a)"
    d="M317 381q-124 28-123-39 69 15 149 2 67-13 72-80 3-101-3-116-19-49-72-58-98-10-162 0-56 10-75 58-12 31-3 147 3 32 9 53 13 46 70 69 83 23 138-9"
  /><path
    d="M360 293h-36v-93q-1-26-29-23-20 3-20 34v47h-36v-47q0-31-20-34-30-3-30 28v88h-36v-91q1-51 44-60 33-5 51 21l9 15 9-15q16-26 51-21 43 9 43 60"
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
