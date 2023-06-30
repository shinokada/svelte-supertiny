<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="CentOS"
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
  ><rect width="512" height="512" fill="#fff" /><g id="g"
    ><rect x="118" y="118" fill="#9ccd2a" width="124" height="124" /><rect
      x="270"
      y="118"
      fill="#932279"
      width="124"
      height="124"
    /><rect x="270" y="270" fill="#efa724" width="124" height="124" /><rect
      x="118"
      y="270"
      fill="#262577"
      width="124"
      height="124"
    /></g
  ><use xlink:href="#g" transform="rotate(225 256 256)" /><path
    fill="none"
    stroke="#fff"
    stroke-width="9"
    d="m236 256-87 88-88-88 88-88zm6-14H118V118H242zm0 28V394H118V270zm14-34-88-87 88-88 88 88zm0 40-88 87 88 88 88-88zm14-34V118H394V242zm0 28H394V394H270zm6-14 87 88 88-88-88-88z"
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
