<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="ExpressionEngine"
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
  ><path d="m0 0H512V512H0" {fill} /><path
    d="m308 293c-24.3 24.3-38.2 28-55.3 28.4-30 .7-36.2-28.4-35.5-39l.8-12.3c74.4-12.6 92.7-28.8 100.6-40 18.3-25.3 7.2-43.3-2-49.5-22-19.7-72.7-5.2-90 4-48 25.8-56.8 70.4-56.3 88.3-1.2 36 25.5 63.5 67 63.2 41.7 1 67.5-25.5 79-37.2zm-88.4-32.3c11.5-68.4 39-78 49.7-78.6 15.4-.3 18.6 16.6 17.5 22.4-1.8 35.4-38 53-66.2 56z"
  ></path><path
    d="m76 165 32 19.6c-140.5 131.3 4 237.6 156.6 207-179.3 3.3-210.3-190.8-65.5-258.4z"
    id="a"
  /><use href="#a" transform="rotate(180, 256, 256)" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
