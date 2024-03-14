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
    ariaLabel = 'Tiktok,',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="TikTok"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><use xlink:href="#t" fill="#f05" x="18" y="15" /><g
    style="fill:#0ee;mix-blend-mode:multiply"
    ><path
      id="t"
      d="m219 200a117 117 0 10101 115V187a150 150 0 0088 28v-63a88 88 0 01-88-88h-64v252a54 54 0 11-37-51"
    /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Tiktok,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
