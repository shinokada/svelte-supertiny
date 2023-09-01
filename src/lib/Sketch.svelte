<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Sketch"
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
  ><rect width="512" height="512" fill="#fff" /><path fill="#ec6c00" d="M257 445 57 213H457" /><path
    fill="#ffae00"
    d="M370 96H144L57 213h81l119 232 119-232h81"
  /><path fill="#fed305" d="m257 84 113 12 6 117H138l6-117" /><path
    fill="#ffefB4"
    d="m257 84 119 129H138"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
-->
