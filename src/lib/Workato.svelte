<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Workato"
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
  ><rect width="512" height="512" fill="#fff" /><path
    fill="#27989F"
    d="M156 386c-32-77-61-167-86-259h64c11 51 30 130 49 186 15-49 35-124 48-186h50c13 62 32 137 49 186 18-56 37-135 48-186h64c-25 92-54 182-86 259h-49c-19-54-35-104-51-163-16 59-32 109-51 163z"
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
