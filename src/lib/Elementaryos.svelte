<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Elementary OS"
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
  ><path d="m0 0H512V512H0" {fill} /><circle
    cx="256"
    cy="256"
    r="180"
    stroke-width="16"
    stroke="#000"
    fill="none"
  /><path
    d="M123 365c129-29 220-136 206-203-14-65-93-72-149-18-59 58-58 164 0 203 91 61 192-18 247-113-1-12-2-16-5-25-57 108-149 165-219 127-68-37-52-133-11-181 63-73 136-23 119 46-7 28-60 125-201 146-1 7 6 20 13 18z"
    fill="#000"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
