<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Overcast"
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
  stroke-linecap="round"
  stroke-width="23"
  ><path d="m0 0H512V512H0" {fill} /><g fill="none" stroke="#fc7e0f"
    ><circle cx="255" cy="255" r="175" /><path
      d="m160 181.1s-24.2 27.3-24.2 75 24.2 73.9 24.2 73.9"
    /><path d="m352.8 181.1s24.2 27.3 24.2 75-24.2 73.9-24.2 73.9" /><path
      d="m314.2 213s16.3 20.3 15.9 43c-.5 27.3-15.7 42.3-15.7 42.3"
    /><path d="m197.8 213s-16.3 20.3-15.9 43c.5 27.3 15.7 42.3 15.7 42.3" /></g
  ><g fill="#fc7e0f"
    ><circle cx="255" cy="255" r="32" /><path d="m260.4 284.9-22.7-6.1-37.8 141.2 22.7 6.1z" /><path
      d="m251.6 284.7 22.6-6 37.6 141.3-22.6 6z"
    /><path d="m230.6 360.9 8.4-8.6 58.2 56.7-8.4 8.6z" /><path
      d="m279.9 361.2-7.6-7.7-57.7 57.3 7.6 7.7z"
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
