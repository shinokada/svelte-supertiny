<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="GitLab"
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
  ><rect width="512" height="512" fill="#30353e" /><path
    fill="#e24329"
    d="M84 215l43-133c2-7 12-7 14 0l115 353L371 82c2-7 12-7 14 0l43 133"
  /><path fill="#fc6d26" d="M256 435L84 215h100.4zm71.7-220H428L256 435l71.6-220z" /><path
    fill="#fca326"
    d="M84 215l-22 67c-2 6 0 13 6 16l188 137zm344 0l22 67c2 6 0 13-6 16L256 435z"
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
