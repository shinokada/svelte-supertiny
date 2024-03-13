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
    ariaLabel = 'Wikipedia,',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="Wikipedia"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="m65 152v8c0 2 1 3 4 3 20 1 20 5 28 23l90 196c7 14 16 16 25-1l45-88 42 88c8 15 16 16 24 0l86-194c8-17 19-24 36-24 2 0 2-1 2-3v-8h-80l-1 1v7c0 2 2 3 4 3 10 0 29 2 21 19l-70 166-3-1-43-88 37-72c8-15 10-24 25-24 2 0 4-1 4-3v-7l-1-1h-64l-1 1v7c0 3 4 3 7 3 18 1 16 8 10 19l-27 56-25-52c-9-16-11-21 2-22 3-1 8-1 8-4v-7l-1-1h-69l-1 1v8c0 2 2 2 5 2 12 2 12 3 23 26l40 84-37 75-3-1-76-167c-8-17 2-16 18-17 3 0 3-1 3-3v-7l-1-1z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Wikipedia,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
