<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Gmail"
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
  ><path d="m0 0H512V512H0" {fill} /><path d="m76 190v171q0 30 30 30h52V190" fill="#4285f4" /><path
    d="m354 190v201h52q30 0 30-30V190"
    fill="#34a853"
  /><path d="m350 255v-106l28-21c24-18 58 2 58 30v32" fill="#fbbc04" /><path
    d="m154 249v-106l102 77 98-74v106l-98 74"
    fill="#ea4335"
  /><path d="m76 190v-32c0-29 34-48 58-30L158 146v106" fill="#c5221f" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
