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
    ariaLabel = 'Email',
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
  aria-label="Email"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="teal" /><rect
    width="356"
    height="256"
    x="78"
    y="128"
    {fill}
    rx="8%"
  /><path
    fill="none"
    stroke="teal"
    stroke-width="20"
    d="M434 128L269 292c-7 8-19 8-26 0L78 128m0 256l129-128m227 128L305 256"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Email';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
