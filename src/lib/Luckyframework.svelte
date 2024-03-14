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
    ariaLabel = 'Luckyframework,',
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
  aria-label="Lucky Framework"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><radialGradient id="a" cx="7.25" cy="4" r="7.73"
    ><stop offset=".975" stop-color="#9cfd65" /><stop offset=".975" stop-color="#34db96" /><stop
      offset="1"
      stop-color="#34db96"
    /><stop offset="1" stop-color="#1b92b1" /></radialGradient
  ><path
    stroke="url(#a)"
    stroke-linejoin="round"
    stroke-width="150"
    d="M146.1 351.1H366L256 161z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Luckyframework,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
