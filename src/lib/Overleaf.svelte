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
    ariaLabel = 'Overleaf',
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
  aria-label="Overleaf"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="M118 304c0 41 23 79 60 99 37 19 81 17 115-7 34-23 52-64 47-105s-32-76-71-91c-13-5-26-8-40-7.5-24 16-44 39-56 65 41-43 99-30 123 16 21 52-16 103-67 104-54-2.7-85-55-77-100 14-86 117-135 193-154-35 17-69 36-101 58 92 35 107-42 149-76-43-17-197-25-198 68-44 28-75 72-77 130z"
    fill="#46a247"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Overleaf';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
