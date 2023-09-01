<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Google Colab"
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
    d="M244 156a127 127 0 100 200l-32-53a66 66 0 110-94m224-43a1 1 0 10-180 180l43-43a1 1 0 0194-94"
    fill="#f9ab00"
  /><path
    d="M97.7 187.5a97 97 0 000 137m179.8 0a1 1 0 00137-137"
    fill="none"
    stroke="#e8710a"
    stroke-width="60.8"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
-->
