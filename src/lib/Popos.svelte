<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Pop!_OS"
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
  ><path d="m0 0H512V512H0" fill="#48b9c7" /><path
    d="M144 145c-20 21 12 48 40 112 33 64 47 93 66 83 18-15-13-58-17-87 121-61 5-217-89-108zm80 72q-9 1-22-27t-8-41q5-12 23 5t19 41q1 23-12 22zm88-25c-23 133-2 137 50 13 11-25-45-42-50-13zm-6 120c-15-3-27 22-7 30 19 3 21-25 7-30zm-141 47a15 15 0 100 30h175a15 15 0 100-30z"
    {fill}
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
