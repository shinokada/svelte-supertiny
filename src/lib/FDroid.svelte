<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="F-Droid"
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
  {fill}
  ><path d="m0 0H512V512H0" /><g transform="translate(104 108)"
    ><g id="i"
      ><path fill="#681" d="m-27-34q-5 7 2 15L2 16h7" /><path
        fill="#9b0"
        d="M18 4-9-31q-8-11-17-4c-5 5-3 6 30 47"
      /></g
    ><use xlink:href="#i" transform="matrix(-1 0 0 1 304 0)" /><rect
      fill="#c6f04c"
      width="304"
      height="48"
      rx="24"
    /><rect y="56" fill="#93c50b" width="304" height="48" rx="24" /><rect
      y="8"
      fill="#aeea00"
      width="304"
      height="88"
      rx="24"
      ry="20"
    /><rect y="112" fill="#4791db" width="304" height="48" rx="24" /><rect
      y="272"
      fill="#1c68b3"
      width="304"
      height="48"
      rx="24"
    /><rect y="120" fill="#1976d2" width="304" height="192" rx="24" ry="22" /><g id="o"
      ><ellipse cx="75" cy="53" rx="27" ry="31" fill="#93c50b" /><circle
        cx="75"
        cy="57"
        r="27"
      /></g
    ><use xlink:href="#o" x="156" /><path
      fill="#0d47a1"
      d="m68 217a84 84 0 100-2m15 0a69 69 0 110 2m21-13a50 50 0 110 24h25a26 26 0 100-24"
    /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
