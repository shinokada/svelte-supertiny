<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Fediverse"
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
  ><path d="m0 0H512V512H0" /><g stroke-width="25"
    ><path stroke="#d0188f" d="m106 179 31 197" /><path stroke="#5b36e9" d="m137 375 201 32" /><path
      stroke="#30b873"
      d="m423 229-90 178"
    /><path stroke="#ebe305" d="m282 88 141 141" /><path stroke="#f47601" d="m105 179 178-90" /></g
  ><path fill="#57c115" d="m276 125h25l12 70-26-4m31 39-26-4 23 146h25" /><path
    fill="#5496be"
    d="m164 347v28l136-69-4-26m36 10-4-26 67-34v28"
  /><path fill="#a730b8" d="m125 180v35l97 98 23-12m2 37 23-12 45 45v35" /><path
    fill="#ce3d1a"
    d="m254 118h28l-72 141-19-19m3 51-19-19-39 77h28"
  /><path fill="#dbb210" d="m137 171v25l66 11 12-23m24 29 12-24 140 23v25" /><g
    stroke-width="3.5"
    stroke="#000"
    ><circle cx="106" cy="179" r="39" fill="red" /><circle
      cx="333"
      cy="406"
      r="39"
      fill="#00a3ff"
    /><circle cx="137" cy="375" r="39" fill="#9500ff" /><circle
      cx="283"
      cy="88.5"
      r="39"
      fill="#fc0"
    /><circle cx="423" cy="230" r="39" fill="#6f0" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
