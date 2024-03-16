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
    ariaLabel = 'Chrome',
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
  aria-label="Chrome"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><circle cx="256" cy="256" r="192" fill="#fcc11d" /><path
    d="m94 153a192 192 90 00162 295l82-142"
    fill="#289b48"
  /><path d="m89.72 160a192 192 90 01332.56 0H256l-82 146" fill="#e0392c" /><circle
    cx="256"
    cy="256"
    r="86"
    fill="#1a73e8"
    stroke="#fff"
    stroke-width="20"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Chrome';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
