<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="quora"
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
  ><rect width="512" height="512" fill="#b92b27" /><path
    d="M412.9 386a18 18 0 01-12.5 30.4l-146-.1a163 163 0 11128.8-59.8zM354 253.5a1 1 0 00-195 0 1 1 0 00195 0z"
    fill="#fff"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
-->
