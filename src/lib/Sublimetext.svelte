<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Sublime Text"
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
  fill="#ff9800"
  ><path d="m0 0H512V512H0" fill="#424242" /><g transform="skewY(-17.5)"
    ><rect x="110" y="375" width="292" height="107" rx="8" fill="url(#g)" /><rect
      x="110"
      y="191"
      width="292"
      height="107"
      rx="8"
    /></g
  ><rect transform="skewY(17.5)" x="110" y="122" width="292" height="107" rx="8" /><linearGradient
    id="g"
    x1=".6"
    x2=".7"
    y1=".6"
    y2=".54"
    ><stop stop-color="#ff9700" offset="0" /><stop stop-color="#f48e00" offset=".5" /><stop
      stop-color="#d06f00"
      offset=".9"
    /></linearGradient
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
