<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="DataCamp"
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
  ><path d="m0 0H512V512H0" fill="#05192d" /><path
    fill="#03EF62"
    d="m273.2 378.4v-95.3l150.4-85.8-36.6-20.9-113.8 64.9v-95.7c0-6.4-3.5-12.5-9.1-15.7L127.2 51.3a26.1 26.1 90 00-26.5.8A26.1 26.1 90 0088.4 74.4v268.9c0 9.1 4.6 17.5 12.3 22.3a26 26 90 0026.5.8l109.7-62.6V389c0 6.5 3.6 12.6 9.2 15.8l140.7 80.1 36.6-21-150.2-85.5zm-36.3-222.2V262l-112.2 64V91.8l112.2 64.4z"
  ></path></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
