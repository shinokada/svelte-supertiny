<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Bash"
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
    fill="#2A3238"
    d="m268 249q-16 12-16 30v148q0 22 19 21l153-93V176q-9-19-29-6m-88.1 106.1q1.7-1 2 2v10.3q7.6-2.8 12.3-1.3 1 .4.7 2.2l-2.8 11q-.5 2-3 1c-11-2-21 8-19.3 17s19-1 26 12-3 34-13.5 41.4l.3 11q0 2-1.2 3l-7 4q-2 1-2-2v-9.9q-8 3.4-14 1.6-2-.4-1.3-3l2.4-10q1-3 3-1.7c16 3 26-13 22-21s-19 0-25.2-10 0-30 12.7-39.5v-10.5q0-2.8 2-4"
  /><path
    fill="none"
    stroke="#2A3238"
    stroke-width="9"
    d="m109 139q-25 15-25 44v146q0 29 26 44l123 73q23 13 46 0l123-73q26-15 26-44V183q0-29-25-44L278 65q-23-12-44 0z"
  /><path
    fill="#4DA925"
    d="m342.4 364.7q-1.1.7-1.1 2v8c0 1.3.9 1.5 1.6 1l32-19.4q.9-.6.9-2.4v-7c0-1.5-1-1.4-1.6-1"
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
