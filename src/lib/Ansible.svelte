<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Ansible"
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
  fill="#fff"
  ><rect width="512" height="512" /><circle cx="256" cy="256" r="192" fill="#1a1918" /><path
    d="m256 184 49.7 122.9-75.2-59.3m37.3-96.8a13 13 0 00-24.1 0l-84 202.3h28.7l33.3-83.5 101 81.7a14 13.5 0 0021.8-16"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
-->
