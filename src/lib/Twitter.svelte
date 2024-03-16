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
    ariaLabel = 'Twitter',
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
  aria-label="Twitter"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    fill="#1d9bf0"
    d="m458 140q-23 10-45 12 25-15 34-43-24 14-50 19a79 79 0 00-135 72q-101-7-163-83a80 80 0 0024 106q-17 0-36-10s-3 62 64 79q-19 5-36 1s15 53 74 55q-50 40-117 33a224 224 0 00346-200q23-16 40-41"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Twitter';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
