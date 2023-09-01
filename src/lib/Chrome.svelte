<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Chrome"
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
    r="192"
    fill="#fcc11d"
  /><path d="m94 153a192 192 90 00162 295l82-142" fill="#289b48" /><path
    d="m89.72 160a192 192 90 01332.56 0H256l-82 146"
    fill="#e0392c"
  /><circle cx="256" cy="256" r="86" fill="#1a73e8" stroke="#fff" stroke-width="20" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
-->
