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
    ariaLabel = 'Briar',
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
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="Briar"
  {role}
  viewBox="0 0 512 512"
  fill="#87c214"
  ><path d="m0 0H512V512H0" {fill} /><g id="b"
    ><path
      id="a"
      d="m145.7 134.5V100a27.4 27.8-3 0127.4-27.8H186a27.4 27.8-3 0127.4 27.8v34.5m0 89.5v185.2c0 15-12.4 27.4-27.4 27.4h-12.9a27.4 27.4 0 01-27.4-27.4V224"
    /><use xlink:href="#a" transform="rotate(180 256 256)" /></g
  ><use xlink:href="#b" fill="#95d220" transform="rotate(90 256 256)" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Briar';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
