<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="WHATWG"
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
    d="m255 64a192 192 0 102 0m0 38a154 154 0 11-2 0m20 215v-16c0-30 62-48 65-95s-47-74-96-69-77 35-76 73h42c0-42 80-57 88-16s-61 56-61 96v27m0 16v38h38v-38"
    fill="#3c790a"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
-->
