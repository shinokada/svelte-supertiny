<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Netflix"
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
  ><path d="m0 0H512V512H0" {fill} /><linearGradient
    id="netflix"
    x1=".29"
    x2=".71"
    y1=".61"
    y2=".39"
    ><stop offset="0" stop-color="#b1060f" /><stop offset=".5" /><stop
      offset="1"
      stop-color="#b1060f"
    /></linearGradient
  ><path fill="url(#netflix)" d="m155 73V439q41-5 72-6V99m58 199V73h72v366" /><path
    fill="#e50914"
    d="M155 73h72l130 366q-41-5-74-6"
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
