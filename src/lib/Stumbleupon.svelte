<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="StumbleUpon"
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
  ><path d="m0 0H512V512H0" fill="#ea4b24" /><path
    fill="none"
    stroke="#fff"
    stroke-width="63"
    d="m99 260v52a52.5 55.5 0 00105 0v-122a52 49.5 0 01104 0v122a52.5 55.5 0 00105 0V260"
  /><path fill="#ea4b24" d="M273 215v44l35 15 35-15v-44l-35 15z" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
