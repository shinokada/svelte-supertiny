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
    ariaLabel = 'Bluetooth,',
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
  aria-label="Bluetooth"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    fill="#0082fc"
    d="m256 460c89 0 150.4-42.3 150.4-204S345 52 256 52 105.6 94.4 105.6 256 167 460 256 460"
  /><path
    fill="none"
    stroke="#fff"
    stroke-width="30"
    d="M174.1 172.2 327.2 325.6 258 395V117l69.2 69.4-152.9 153.1"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Bluetooth,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
