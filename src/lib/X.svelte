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
    ariaLabel = 'X,',
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
  aria-label="X"
  {role}
  viewBox="0 0 512 512"
  ><rect width="512" height="512" {fill} /><path
    d="M281.7 234.3 382.2 120h-23.8l-87.3 99.2-69.7-99.2H121l105.4 150L121 389.9h23.8L237 285.1l73.6 104.8H391ZM153.4 137.5H190l168.4 235.6h-36.6Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'X,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
