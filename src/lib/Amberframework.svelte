<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Amber Framework"
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
    fill="#e67e25"
    d="M256 446 87 351l44-79L256 66l169 95v190"
  /><path fill="#f3c095" d="m87 161 169-95-125 206" /><path
    fill="#eb994f"
    d="m256 66-125 206 240-69m54 148-109 7-60 88"
  /><path fill="#e88b3d" d="M87 351V161l44 111 185 86 55-155 54 148-109 7-60 88-125-174" /></svg
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
