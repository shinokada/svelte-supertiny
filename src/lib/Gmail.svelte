<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Gmail"
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
    d="M158 391v-142l-82-63V361q0 30 30 30"
    fill="#4285f4"
  /><path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335" /><path
    d="M354 391v-142l82-63V361q0 30-30 30"
    fill="#34a853"
  /><path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f" /><path
    d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26"
    fill="#fbbc04"
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
