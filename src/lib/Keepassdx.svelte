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
    ariaLabel = 'Keepassdx',
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
  aria-label="KeePassDX"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#4a4" /><filter id="t"><feGaussianBlur stdDeviation="8" /></filter
  ><path
    fill="#307333"
    filter="url(#t)"
    d="m262 181a79 79 0 100-1m86 0a24 24 0 110 1m-239-28v-35h35l259 259v35h-35zm0 225v34h35l36-36h35v-35h35v-24l-40-40"
  /><path fill="#ffa726" d="m144 109h-35v35l259 259h35v-35" /><path
    {fill}
    d="m262 172a79 79 0 100-1m86 0a24 24 0 110 1M109 369v34h35l36-36h35v-35h35v-24l-40-40"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Keepassdx';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
