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
    ariaLabel = 'Safari',
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
  aria-label="Safari"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><radialGradient id="a"
    ><stop stop-color="#0bd" offset="0" /><stop offset="1" stop-color="#17d" /></radialGradient
  ><g transform="matrix(4 0 0 4 256 256)"
    ><g stroke="#eee" fill="none"
      ><circle r="52.5" fill="url(#a)" stroke-width="5" /><circle
        r="45"
        stroke-dasharray="1.25 8.175"
        stroke-dashoffset=".5"
        stroke-width="5.5"
      /><circle r="42.5" stroke-dasharray="1.25 7.65" stroke-dashoffset="5" stroke-width="10" /></g
    ><path d="M6 6l-12-12l-29 39" fill="#eee" /><path d="M6 6l-12-12l41-28" fill="#f55" /><path
      opacity=".3"
      d="M-35 33l7-5-3 5 37-27 28-35-4 2 4-6"
    /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Safari';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
