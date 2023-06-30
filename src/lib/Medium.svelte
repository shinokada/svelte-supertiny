<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Medium"
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
  ><rect width="512" height="512" fill="#12100e" /><path
    fill="#fff"
    d="M125 173c0-4-2-9-5-11l-31-38v-6h98l75 166 67-166h93v6l-27 26c-2 1-3 4-3 7v190c0 3 1 6 3 8l27 25v6H289v-6l27-26c3-3 3-4 3-8V193l-76 192h-10l-88-192v129c-1 5 1 11 5 15l35 43v5H85v-5l35-43c4-4 6-10 5-15z"
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
