<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="SubscribeStar"
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
  fill="#fff"
  ><path d="m0 0H512V512H0" /><circle cx="256" cy="256" r="192" fill="#098" /><path
    fill="#d64081"
    d="m163 251q-3 8-5 20 9 53 77 53"
  /><path
    d="m160 182v35c0 90 52 108 101 108s103-43 95-121-73-104-105-140q-33-1-76 17c39 63 85 67 111 123h-61v-22"
  /><path fill="#dbb3cd" d="m256 257q25 2 25 37v29l7-2v-64" /><path
    fill="#f48"
    d="m158 271c-17 103 65 138 102 177q38 0 76-17.5C308 381 256 364 235 324q-56-4-77-53m196 24c0-54-30-122-129-103v22c0 37 14 43 31 43s31 5 31 39v34h67"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
