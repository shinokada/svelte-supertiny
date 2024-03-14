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
    ariaLabel = 'Vimeo,',
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
  aria-label="Vimeo"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#1eb8eb" /><path
    d="m73 195c0 0 59-71 104-79 47-10 47 73 59 118 11 45 18 70 27 70s29-24 49-63c21-37-1-71-41-47 17-95 166-118 147-9s-128 202-161 223-62-9-73-30c-12-26-49-164-59-176s-39 12-39 12z"
    {fill}
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Vimeo,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
