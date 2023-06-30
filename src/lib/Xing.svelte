<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="XING"
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
  ><rect width="512" height="512" fill="#077" /><path
    d="M131 157l36 60v1l-54 94c-4 7-1 11 3 11h58c3 0 4 0 6-3l57-99v-2l-40-64-2-4-4-1h-56c-3 0-5 3-4 7zm217-74c-5 0-7 2-10 6L225 287v2l75 133c2 3 4 4 8 4h54c6 0 8-3 5-9l-74-128L406 90c2-4-1-7-5-7z"
    fill="#fff"
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
