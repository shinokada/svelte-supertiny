<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Printer"
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
    d="m416.2 164.5h-320.4c-38.9 0-68.6 29.7-68.6 68.6v137.3h91.5v91.5h274.6v-91.5h91.5v-137.3c0-38.9-29.7-68.6-68.6-68.6zm-68.6 251.7h-183.1v-114.4h183v114.4zm68.6-160.2c-13.7 0-22.9-9.2-22.9-22.9s9.2-22.9 22.9-22.9 22.9 9.2 22.9 22.9-9.2 22.9-22.9 22.9zm-22.9-205.9h-274.6v91.5h274.6v-91.5z"
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
