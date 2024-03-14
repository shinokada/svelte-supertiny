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
    ariaLabel = 'Buffer,',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="Buffer"
  {role}
  viewBox="0 0 512 512"
  {fill}
  ><path d="m0 0H512V512H0" fill="#000" /><path
    d="M84 166q-7.5-4.5 0-9l162-75q10-4.5 20 0l162 75q7.5 4.5 0 9l-162 75q-10 4.5-20 0z"
  /><path
    id="a"
    d="M84 251q-7.5 5 0 10l162 75q10 3 20 0l162-75q7.5-5 0-10l-32-14q-10.5-4.5-21 0l-109 50q-10 4.5-20 0l-109-50q-10.5-4.5-21 0z"
  /><use transform="translate(0 94)" xlink:href="#a" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Buffer,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
