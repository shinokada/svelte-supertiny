<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Zorinos"
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
  ><rect width="512" height="512" fill="#fff" /><polygon
    points="120,140,150,80,365,80,400,140"
    fill="#15a6f0"
  /><polygon points="50,260,85,200,310,200,85,320" fill="#15a6f0" /><polygon
    points="120,380,150,440,365,440,400,380"
    fill="#15a6f0"
  /><polygon points="210,320,430,320,465,260,430,200" fill="#15a6f0" /></svg
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
