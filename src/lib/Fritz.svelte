<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="Fritz!"
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
  ><path d="m0 0H512V512H0" fill="#f8ec17" /><use xlink:href="#a" x="4" y="3.5" /><g fill="#e2001a"
    ><path
      id="a"
      d="m44 188v119h34v-42h29v-28H78v-21h32v-29zm75 136h33v-87h6c3 0 10 4 10 12s-6 15-16 23l34 56q13-10 26-24l-27-32c14-11 17-20 16-30s-5-17-16-22-27-7-65-5zm93-114v88h34V191h-25l4 16zm68 31v83h33v-83l28 1h2v-30h-93v30h2zm56 56h88v-30q-26 1.5-40 0l43-80q-34-2-84-2v30q13-1 36-1v1zm109-3 18-15-15-18-18 15zm15-33 8.5-56-28-2-3.5 57z"
      stroke="#000"
      stroke-width="2.6"
    /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
-->
