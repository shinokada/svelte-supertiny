<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Codeberg"
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
  ><rect width="512" height="512" fill="#fff" /><defs
    ><linearGradient
      id="A"
      x1="259.804"
      x2="383.132"
      y1="161.4"
      y2="407.835"
      gradientUnits="userSpaceOnUse"
      ><stop offset="0" stop-color="#fff" stop-opacity="0" /><stop
        offset=".5"
        stop-color="#71c2ff"
      /><stop offset="1" stop-color="#39aaff" /></linearGradient
    ></defs
  ><path fill="url(#A)" d="M332 440.2a192 192 0 0086.8-74.4L256 156" opacity=".5" /><path
    fill="#2185d0"
    d="M418.6 365.8a192 192 0 10-325.3 0l160.1-207a3 3 0 015.2 0l160 207"
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
