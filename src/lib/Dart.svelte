<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Dart"
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
  fill-rule="evenodd"
  ><path d="m0 0H512V512H0" {fill} /><path
    fill="#01579b"
    d="M93.6 294.2c-10-13.3-9.5-27.5-.8-42.3l51.3-107.2 8.1 208.6z"
  /><path fill="#40c4ff" d="M365.2 363.9l-200.9 1.6 59.7 60.3 141.1.4z" /><path
    fill="#2cb7f6"
    d="M297.6 99c-14.2-15.4-31.6-17.1-52.1-5.7l-101.4 51.4v184.5c-.5 9.2 2.6 18.8 8.1 24.2l12.3 12.2h200.7L353 155.44z"
  /><path
    fill="#01579b"
    d="M426.1 225.9L353.7 155c-7.5-7.1-15.5-10.4-24-10.3H144.1l221.1 220.9h60.9z"
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
