<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Ubisoft"
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
  ><path d="m0 0H512V512H0" /><path
    {fill}
    d="M403 327c-28 63-85 96-146 95-117-6-151-141-73-190l3 4c-85 110 82 216 159 89 63-132-94-262-230-162l-3-3c36-57 106-82 172-65a170 170 0 01118 232zm-110-2a52 52 0 01-89-5c-19-40 8-76 42-77 42-2 59 45 33 72l14 10zm-183-5l-5 2c-45-173 177-218 221-81l-4 2c-66-94-218-61-212 77zm337-64a201 201 0 00-380-89l15 11c-13 29-19 57-19 86 6 128 100 192 194 192 94-1 191-75 190-200"
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
