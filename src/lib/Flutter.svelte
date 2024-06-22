<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Flutter"
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
  ><path d="m0 0H512V512H0" {fill} /><linearGradient id="a" y1="1"
    ><stop offset="0" stop-color="#204792" /><stop
      offset=".6"
      stop-color="#225a9d"
    /></linearGradient
  ><path fill="#225a9d" d="m270 340h-56v56l42 42h112" /><path
    d="m214 312v84l72-25"
    fill="url(#a)"
  /><path fill="#5cc8f8" d="m130 312-56-56L256 74h112m-98 266h-56v-56l42-42h112" /><path
    fill="#43b9f6"
    d="m158 340 56-56 56 56-56 56"
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
