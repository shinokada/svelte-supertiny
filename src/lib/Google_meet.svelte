<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Google Meet"
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
  ><path d="m0 0H512V512H0" {fill} /><path fill="#ea4335" d="M166 106v90H76" /><path
    fill="#ffba00"
    d="M166 106v90h120v62l90-73v-49q0-30-30-30"
  /><path
    fill="#00ac47"
    d="M376 183l42-34c9-7 18-7 18 7v200c0 14-9 14-18 7l-42-34m-212 77v-90h122v-60l90 71v49q0 30-30 30"
  /><path fill="#0066da" d="M76 314v62q0 30 30 30h60v-92" /><path
    fill="#2684fc"
    d="M76 196h90v120H76"
  /><path fill="#00832d" d="M286 256l90-73v146" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
