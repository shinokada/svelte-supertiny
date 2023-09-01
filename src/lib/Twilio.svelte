<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Twilio"
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
  ><rect width="512" height="512" fill="#fff" /><path
    fill="#f22f46"
    d="m255 64a192 192 0 102 0m0 51a141 141 0 11-2 0m-46.8 54a39.7 39.7 0 101 0h93.6a39.7 39.7 0 101 0m-95.6 94.5a39.7 39.7 0 101 0h93.6a39.7 39.7 0 101 0"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
-->
