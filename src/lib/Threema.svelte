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
    ariaLabel = 'Threema,',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="Threema"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#323232" /><path
    d="m102 365 82-21a164.4 144.5 0 10-65-50m81-83s-1-9 9-9v-18a1 1 0 0194 0v18s9-1 9 9v64s0 8-8 8h-96s-8 0-8-8m28-73h56v-18.4a1 1 0 00-56 0"
    {fill}
  /><path d="m154 396a28 28 0 102 0h99a28 28 0 102 0h99a28 28 0 102 0" fill="#05a63f" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Threema,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
