<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Steam"
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
  fill="#ebebeb"
  ><path d="m0 0H512V512H0" fill="#231f20" /><path d="m183 280 41 28 27 41 87-62-94-96" /><circle
    cx="340"
    cy="190"
    r="49"
  /><g fill="none" stroke="#ebebeb"
    ><circle cx="179" cy="352" r="63" stroke-width="19" /><path
      d="m-18 271 195 81"
      stroke-width="80"
      stroke-linecap="round"
    /><circle cx="340" cy="190" r="81" stroke-width="32" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
