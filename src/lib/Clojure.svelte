<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Clojure"
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
    d="m446 281s-10 71-104 62A122 122 180 00208 144s-51-34-107 0A191.3 192 180 01446 281"
    fill="#5881d8"
  /><path
    d="m66 235s20-87 110-71a121.4 122 0 00134 201q48 16 103 1A191.5 192 0 0166 235"
    fill="#63b132"
  /><path d="m225 160c19 21 29 54 34 73s30 103 57 104a100 100.8 0 00-91-177" fill="#90b4fe" /><path
    d="m242 241q-45 84-45 97a101 101 0 011-165q24 10 44 68m6 18q20 76 40 93s-32 12-67-1c-2-27 7-44 27-92"
    fill="#91dc47"
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
