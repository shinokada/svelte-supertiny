<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="OpenBenches"
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
  ><path d="m0 0H512V512H0" {fill} /><g stroke="#000" stroke-width="9.7"
    ><path
      fill="#11b0a3"
      d="m75 303a187 187 0 11362 0m-172-32v-46H133v46m-20 0h35v29-29h102v29-29h39m-36-96q-17-4-28 13 4-14-11-29m-11-32q-14 8-11 29-8-13-28-12"
    /><path stroke="#fb0" d="m156 249h85" /><path
      fill="#070"
      d="m335 243a47.5 48 0 115 0m27-50-27 27-28-28m26 0v111m18 0c3-16 21-21 31-12q7-20 28-20 1-24 27-29 3 32-5 61"
    /><path
      fill="#8c5015"
      d="m75 303a187 187 0 00362 0zm31 61 317-30m-18 34-222 61m-25-15 137-40m-94 5-71 13"
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
