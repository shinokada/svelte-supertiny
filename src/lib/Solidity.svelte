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
    ariaLabel = 'Solidity,',
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
  aria-label="Solidity"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    opacity=".4"
    d="m314.5 73.6-58.6 104h-117l58.5-104h117.1"
  /><path opacity=".6" d="M255.9 177.6h117l-58.4-104H197.4l58.5 104" /><path
    opacity=".8"
    d="m197.4 281.7 58.5-104.1-58.5-104-58.5 104 58.5 104.1"
  /><path opacity=".4" d="m198 437.8 58.5-104h117l-58.4 104H198" /><path
    opacity=".6"
    d="M256.6 333.7H139.5l58.5 104h117l-58.4-104"
  /><path opacity=".8" d="m315.1 229.7-58.5 104 58.5 104 58.5-104-58.5-104" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Solidity,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
