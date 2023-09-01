<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="Slack"
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
  ><rect width="512" height="512" fill="#fff" /><g fill="#e01e5a"
    ><path
      id="slack"
      d="M149 305a39 39 0 01-78 0c0-22 17 -39 39 -39h39zM168 305a39 39 0 0178 0v97a39 39 0 01-78 0z"
    /></g
  ><use xlink:href="#a" fill="#36c5f0" transform="rotate(90,256,256)" /><use
    xlink:href="#a"
    fill="#2eb67d"
    transform="rotate(180,256,256)"
  /><use xlink:href="#a" fill="#ecb22e" transform="rotate(270,256,256)" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
-->
