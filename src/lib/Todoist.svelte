<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Todoist"
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
  ><path d="m0 0H512V512H0" fill="#E44232" /><path
    {fill}
    d="M167.1 240.2l103.6-59.7h.1l106.8-61.6c4.5-2.6 4.7-10.6-.3-13.5l-3.6-2-14.6-8.4a16.6 16.6 0 0 0-16.2.2L166.6 196.7a22 22 0 0 1-21.8 0L56 145v44l1 .5c22 12.9 74.5 43.5 87.4 50.8a21.3 21.3 0 0 0 22.7 0z M167.1 328l103.5-59.7.4-.2 106.6-61.4c4.5-2.6 4.7-10.6-.3-13.5l-3.6-2-14.6-8.4a16.6 16.6 0 0 0-16.2.2L166.6 284.4c-6.8 3.9-15 4-21.8 0L56 232.8v43.9l1 .5c22.1 13 74.5 43.5 87.4 50.8a21.4 21.4 0 0 0 22.7 0z M270.7 356l-103.6 59.7c-7.5 4.3-15 4.4-22.7 0A15382 15382 0 0 1 56.9 365l-.9-.6v-43.9l88.8 51.7a22 22 0 0 0 21.8 0l176.3-101.5c6-3.5 12.5-2.3 16.2-.2l14.6 8.4 3.6 2c5 3 4.8 11 .3 13.5z"
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
