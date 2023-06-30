<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="XMPP"
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
  xmlns:xlink="http://www.w3.org/1999/xlink"
  ><rect width="512" height="512" fill="#fff" /><linearGradient id="a" x1=".5" x2=".5" y1="1"
    ><stop stop-color="#1be" offset=".3" /><stop stop-color="#025" offset="1" /></linearGradient
  ><path
    id="b"
    d="m379.9 170c0 212.7-220.9 272-220.9 272v2c148-12 311-165 316-311z"
    fill="url(#a)"
  /><g fill="#e61"><path id="c" d="m344 183c-3 120-104 233-187 258v2c127-36 273-161 256-286z" /></g
  ><g fill="#d51"
    ><path id="d" d="m396 163.4c0.1 130-95.3 245-252 278v5c173-13 284-179.7 272-290.7z" /></g
  ><g transform="matrix(-1,0,0,1,512,0)"
    ><use xlink:href="#b" /><use fill="#ac6" xlink:href="#c" /><use
      fill="#493"
      xlink:href="#d"
    /></g
  ></svg
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
