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
  fill="#fff"
  ><rect width="512" height="512" fill="#fff" /><path
    fill="#ec6c00"
    d="M457 205 257 437 57 205"
  /><path fill="#ffae00" d="M370 88 457 205 376 205 257 437 138 205 57 205 144 88" /><path
    fill="#fed305"
    d="M257 76 370 88 376 205 138 205 144 88"
  /><path fill="#ffefB4" d="M257 76 376 205 138 205" /></svg
>
<!--
@component
[Go to Document](https://shinokada.github.io/svelte-supertiny/)
## Props
@prop size = '24';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
