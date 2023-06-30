<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Preact"
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
  ><rect width="512" height="512" fill="#fff" /><g transform="translate(256,256)"
    ><path d="M0,-256 222,-128 222,128 0,256 -222,128 -222,-128z" fill="#673ab8" /><ellipse
      cx="0"
      cy="0"
      stroke-width="16"
      rx="75"
      ry="196"
      fill="none"
      stroke="#fff"
      transform="rotate(52.5)"
    /><ellipse
      cx="0"
      cy="0"
      stroke-width="16"
      rx="75"
      ry="196"
      fill="none"
      stroke="#fff"
      transform="rotate(-52.5)"
    /><circle cx="0" cy="0" r="34" fill="#fff" /></g
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
