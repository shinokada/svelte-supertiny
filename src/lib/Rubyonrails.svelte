<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Ruby On Rails"
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
  ><path d="m0 0H512V512H0" {fill} /><g fill="#c00"
    ><path d="M98 402c34-163 125-282 321-288v15c-121 33-180 118-159 273H98z" /><path
      d="M274 359l-4 27 30 13 1-27zM88 283l-13 36 34 10 13-35zM158 175l-25 27 31 23 25-30zM250 109l-27 19 21 24 28-18zM325 99l6 18 28-7-6-16zM359 169l13 20 16-15-7-16zM320 196l-17 18 23 27 12-19zM283 274l-8 25 31 18 1-27z"
    /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
