<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="NetBeans"
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
  ><path d="m0 0H512V512H0" {fill} /><path d="M84 157v39H256V58" fill="#a1c535" /><path
    d="M256 58V196H428V157"
    fill="#add439"
  /><path d="M361 196V355h67V157" fill="#1b6ac6" /><path
    d="M256 454V316H361l67 39"
    fill="#2e90e8"
  /><path d="M84 157V355h67V196" fill="#a5073e" /><path
    d="m84 355 67-39 105 61v77"
    fill="#ea205e"
  /><path d="M256 377V196H361V316" fill="#cedbe6" /><path
    d="m151 196 105 60 105-60-105-61"
    fill="#f1f6e2"
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
