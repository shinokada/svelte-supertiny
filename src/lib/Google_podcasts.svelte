<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Google Podcasts"
  {role}
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="43"
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
  ><path d="m0 0H512V512H0" {fill} /><path stroke="#fab908" d="m256 109v22m0 64v122m0 64v22" /><path
    stroke="#ea4335"
    d="m181 176v75m0 64v21"
  /><path stroke="#34a853" d="m331 176v21m0 64v75" /><path stroke="#4285f4" d="m405 245v22" /><path
    stroke="#0066d9"
    d="m107 245v22"
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
