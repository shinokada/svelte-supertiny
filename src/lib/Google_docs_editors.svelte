<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Google Docs Editors"
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
  ><path d="m0 0H512V512H0" {fill} /><path
    d="M131.5 344h83v-174h83v-86h-136q-30 0-30 30"
    fill="#ffba00"
  /><path d="M297.5 84v86h83" fill="#ea4335" /><path
    d="M297.5 170h83v174h-83"
    fill="#2684fc"
  /><path d="M131.5 342v56q0 30 30 30h55v-86" fill="#00832d" /><path
    d="M214.5 342h85v86h-85"
    fill="#00ac47"
  /><path d="M297.5 342h83v56q0 30-30 30h-53" fill="#0066da" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
