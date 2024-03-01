<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Reddit"
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
  ><path d="m0 0H512V512H0" fill="#f40" /><g fill="#fff"
    ><ellipse cx="256" cy="307" rx="166" ry="117" /><circle cx="106" cy="256" r="42" /><circle
      cx="407"
      cy="256"
      r="42"
    /><circle cx="375" cy="114" r="32" /></g
  ><g stroke-linecap="round" stroke-linejoin="round" fill="none"
    ><path d="m256 196 23-101 73 15" stroke="#fff" stroke-width="16" /><path
      d="m191 359c33 25 97 26 130 0"
      stroke="#f40"
      stroke-width="13"
    /></g
  ><g fill="#f40"><circle cx="191" cy="287" r="31" /><circle cx="321" cy="287" r="31" /></g></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
