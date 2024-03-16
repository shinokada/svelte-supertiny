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
    ariaLabel = 'Codeberg',
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
  aria-label="Codeberg"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><linearGradient id="a" x2=".2" y2="1"
    ><stop offset=".16" stop-color="#fff" /><stop offset=".54" stop-color="#b8e1ff" /><stop
      offset="1"
      stop-color="#9cd4ff"
    /></linearGradient
  ><path fill="url(#a)" d="M332 440.2a192 192 0 0086.8-74.4L256 156" /><path
    fill="#2185d0"
    d="m418.6 365.8a192 192 0 10-325.3 0l160.1-207a3 3 0 015.2 0"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Codeberg';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
