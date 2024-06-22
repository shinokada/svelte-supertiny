<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="GitLab"
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
    fill="#e24329"
    d="m71 222 52-136c5-12 21-12 26 0l35.5 109h143L363 86c5-12 21-12 26 0l52 136-185 120"
  /><path fill="#fca326" d="m244 442q12 10 24 0l61-46V340.8H183V396" /><path
    fill="#fc6d26"
    d="m103 336A97 97 0 0171 222q37 8 65 28l193 146 80-60a97 97 0 0032-114q-37 8-65 28L183 396"
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
