<script lang="ts">
  import { getContext } from 'svelte';
  interface CtxType {
    fill?: string;
    size?: string;
    role?: string;
  }
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props {
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
    fill?: string;
  }
  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'Google_maps',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label="Google Maps"
  {role}
  viewBox="0 0 512 512"
  {fill}
  ><path d="m0 0H512V512H0" /><mask id="a"
    ><path
      d="m122 198c0 70 40 105 77 154s40 73 44 83 6 13 13 13 10-3 13-13 7-34 44-83 77-84 77-153a1 1 0 00-268-2m83 0a51 51 0 110 2"
    /></mask
  ><g stroke-width="130" mask="url(#a)"
    ><path stroke="#fbbc04" d="m104 379 152-181" /><path
      stroke="#4285f4"
      d="M256 198L378 53"
    /><path stroke="#34a853" d="m189 459 243-290" /><path
      stroke="#1a73e8"
      d="m255 120-79-67"
    /><path stroke="#ea4335" d="m76 232 91-109" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Google_maps';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
