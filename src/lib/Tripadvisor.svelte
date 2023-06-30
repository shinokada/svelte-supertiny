<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="TripAdvisor"
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
    fill="#fcc40f"
    stroke="#000a12"
    stroke-width="17"
    d="M93 202a195 151 0 0 1 326 0v56h-326"
  /><g transform="translate(256 257)"
    ><g id="tripadvisor" fill="#000a12"
      ><path d="M2 0h-33v45l31 47M-173-49c3-12-19-46-19-48h77" /><circle
        cx="-97"
        cy="0"
        r="97"
      /><circle cx="-97" cy="0" r="78" fill="#fff" /><circle cx="-97" cy="0" r="50" /><circle
        cx="-97"
        cy="0"
        r="33"
        fill="#fff"
      /></g
    ><use xlink:href="#a" transform="scale(-1 1)" /><circle
      cx="-97"
      cy="0"
      r="17"
      fill="#ef6a45"
    /><circle cx="97" cy="0" r="17" fill="#00b087" /></g
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
