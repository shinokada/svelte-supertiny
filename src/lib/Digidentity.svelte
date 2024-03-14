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
    ariaLabel = 'Digidentity,',
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
  aria-label="Digidentity"
  {role}
  stroke-linecap="round"
  stroke-width="25"
  stroke-linejoin="round"
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path stroke="#00e864" d="M213 296l-96 95zm43-40h.1" /><path
    stroke="#000"
    d="M256 63v135m0 116v135M63 256h135m116 0h135M119 119l96 96m82 82l96 96m0-274l-96 96"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Digidentity,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
