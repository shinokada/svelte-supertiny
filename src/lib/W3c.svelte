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
    ariaLabel = 'W3c,',
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
  aria-label="W3C"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#005a9c" /><path
    {fill}
    d="M165 152l37 124 37-124h99v13l-38 64c16 4 40 20 40 62 0 78-83 88-103 24l20-8c19 40 55 28 55-16 0-13-2-41-36-41h-10v-11l36-61h-45l-52 179h-2l-39-126-37 126h-3L63 152h26l37 124 25-83-12-41m222 118c-31-63 23-165 67-89l15-30 4 26-16 29c-29-54-80-14-70 64m-16 25c31 60 74 50 99 3l5 21c-28 53-83 52-105-24zm16-25c-31-63 23-165 67-89l15-30 4 26-16 29c-29-54-80-14-70 64z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'W3c,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
