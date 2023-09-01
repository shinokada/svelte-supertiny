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
  ><rect width="512" height="512" fill="#fff" /><g fill="none" stroke="#c32361" stroke-width="28"
    ><circle cx="256" cy="256" r="178" fill="#ea4c89" /><path
      d="m79 237s225 11 305-105m49 142c-94-33-222-16-296 115"
    /><path stroke-width="32" d="M192 90c78 100 127 206 145 324" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
-->
