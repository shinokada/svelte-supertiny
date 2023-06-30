<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Dribble"
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
  ><rect width="512" height="512" fill="#fff" /><circle
    cx="256"
    cy="256"
    r="180"
    fill="#ea4c89"
  /><g fill="none" stroke="#c32361"
    ><path
      stroke-width="28px"
      d="M79 237A178 178 0 1178 256a178 178 0 011-19c119 2 250-25 305-105M137 389c74-131 202-148 296-115"
    /><path stroke-width="32px" d="M192 90C270 190 319 296 337 414" /></g
  ></svg
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
