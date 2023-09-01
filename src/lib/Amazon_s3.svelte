<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Amazon Simple Storage Service"
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
  ><rect width="512" height="512" fill="#fff" /><g fill="#e05243"
    ><path d="m123 131v250l137-33V163" /><path
      fill="#8c3123"
      d="m97 144V368l26 13V131m75-38v82h58v33l-58 7v82l58 7v33h-58v82l58 29 4-98 129 31V131l-129 31-4-98"
    /><path d="m256 448V64l58 29v82h-58v33l58 7v82l-58 7v33h58v82m75-38V131l26 12v225" /></g
  ><path fill="#5e1f18" d="m314 175-58 11-58-11 58-14" /><path
    fill="#f2b0a9"
    d="m314 337-58-11-58 11 58 14"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
-->
