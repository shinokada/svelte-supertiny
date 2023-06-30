<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Ubuntu"
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
  ><rect width="512" height="512" fill="#e65e17" /><circle
    cx="265"
    cy="256"
    r="124"
    fill="none"
    stroke="#fff"
    stroke-width="51"
  /><g fill="#fff" stroke="#e65e17" stroke-width="10"
    ><circle cx="90" cy="257" r="41" /><circle cx="353" cy="409" r="41" /><circle
      cx="353"
      cy="104"
      r="41"
    /><path stroke-width="19" d="M185,118l82,138m0,0h155h-155l-84,140" /></g
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
