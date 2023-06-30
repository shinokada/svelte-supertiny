<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Chromium"
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
  ><circle cx="256" cy="256" r="256" fill="#afcbfa" /><path
    d="M34.3 128A256 256 0 00256 512L367 320"
    fill="#669df6"
  /><path d="M34.3 128a256 256 0 01443.4 0H256L145 320" fill="#1967d2" /><circle
    cx="256"
    cy="256"
    r="114.7"
    fill="#1a73e8"
    stroke="#fff"
    stroke-width="26.7"
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
