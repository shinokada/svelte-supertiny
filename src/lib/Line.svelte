<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="LINE"
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
  ><path d="m0 0H512V512H0" fill="#00B900" /><path
    d="m443 231c-2 45-21 76-51 103-53 47-137 105-148 96-11-14 21-47-20-52-88-12-155-74-155-147 0-82 85-150 188-150s189 68 186 150z"
    {fill}
  /><path
    d="m371 232h-34m34-36h-36v72h36m-123 0v-72l54 72v-72m-89 72v-72m-66 0v72h37"
    fill="none"
    stroke="#00B900"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="21"
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
