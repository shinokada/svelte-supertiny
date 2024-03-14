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
    ariaLabel = 'KoFi,',
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
  aria-label="Ko-Fi"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#478db1" /><path
    {fill}
    d="M371 140H100c-18 0-20 20 -20 20v184s3 40 40 40h188c41 0 40-40 40 -40v-26h23a89 89 0 000-178m0 132h-23v-86h23a43 43 0 010 86"
  /><path
    fill="#f1464d"
    d="M286 219c-10-30-63-33-77 3-15-36-67-33-77-3-7 19-4 35 9 54s68 64 68 64 56-45 68-64 15-35 9-54"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'KoFi,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
