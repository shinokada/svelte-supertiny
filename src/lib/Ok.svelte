<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="OK.ru"
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
>
  <path d="m0 0H512V512H0" fill="#f58220" />
  <path
    fill="none"
    stroke-width="51.5"
    stroke="#fff"
    stroke-linecap="round"
    d="M318.25 173.5a57.25 57.25 0 10-124.5 0 57.25 57.25 0 10124.5 0M182.5 290.5a137 137 0 00146.5 0M189.25 401l66.25-66.25 66.25 66.25"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
