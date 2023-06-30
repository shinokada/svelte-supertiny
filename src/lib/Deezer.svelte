<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Deezer"
  {role}
  fill="none"
  stroke-width="20"
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
  ><rect width="512" height="512" fill="#231f20" /><path
    stroke="#f1796e"
    d="M78 241h64m-64 26h64"
  /><path stroke="#ec2529" d="M78 293h64m-64 26h64m-64 26h64" /><path
    stroke="#f6dd05"
    d="M148 293h64m-64 26h64m-64 26h64"
  /><path stroke="#e78dcc" d="M218 241h64m-64 26h64m-64-52h64m-64-26h64" /><path
    stroke="#d81996"
    d="M218 293h64m-64 26h64m-64 26h64"
  /><path stroke="#d6e465" d="M288 241h64m-64 26h64" /><path
    stroke="#adda1a"
    d="M288 293h64m-64 26h64m-64 26h64"
  /><path stroke="#b0d8e6" d="M358 241h64m-64 26h64m-64-52h64m-64-26h64m-64-26h64" /><path
    stroke="#56bbe9"
    d="M358 293h64m-64 26h64m-64 26h64"
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
