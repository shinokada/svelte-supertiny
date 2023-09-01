<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Airbnb"
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
  ><rect width="512" height="512" fill="#ff5a5f" /><path
    fill="none"
    stroke="#fff"
    stroke-width="23"
    d="m211 115q-50 95-96 197-24 52 12 83c59 46 112-20 129-38s48-64 48-95-22-49-48-49-48 18-48 49 31 77 48 95 70 84 129 38q36-31 12-83-46-102-96-197c-21-39-69-39-90 0z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
-->
