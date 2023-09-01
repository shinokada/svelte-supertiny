<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Samsung Internet"
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
  fill="#fff"
  ><rect width="512" height="512" fill="#7882ff" /><circle cx="256" cy="256" r="172" /><path
    d="m152 149a199 76 20.8 10255 98"
    stroke="#4d5cc1"
    stroke-width="54"
  /><path d="m98 188a172 172 0 01321 123" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
-->
