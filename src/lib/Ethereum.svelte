<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Ethereum"
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
    fill="#3C3C3B"
    d="m256 362v107l131-185z"
  /><path fill="#343434" d="m256 41l131 218-131 78-132-78" /><path
    fill="#8C8C8C"
    d="m256 41v158l-132 60m0 25l132 78v107"
  /><path fill="#141414" d="m256 199v138l131-78" /><path
    fill="#393939"
    d="m124 259l132-60v138"
  /></svg
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
