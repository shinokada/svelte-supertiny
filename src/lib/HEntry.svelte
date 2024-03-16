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
    ariaLabel = 'HEntry',
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
  aria-label="h-entry"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><rect
    id="s"
    x="99.5"
    y="170"
    width="211.2"
    height="211.2"
    fill="#a3cc00"
    rx="41.5"
    stroke="#fff"
    stroke-width="19.2"
  /><use href="#s" x="76.75" y="-63.75" /><path
    d="M237 224.4l32.1 32.1l70.41-70.41l-32.1-32.1z m-12.75 9.6v35.25h35.25z"
    fill="#fff"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'HEntry';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
