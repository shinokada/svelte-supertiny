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
    ariaLabel = 'Coil',
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
  aria-label="Coil"
  {role}
  viewBox="0 0 512 512"
  {fill}
  ><path d="m0 0H512V512H0" /><path
    fill="#000"
    d="M423 377c0 35-83 71-140 71-70 0-136-37-170-98-16-28-24-60-24-92 0-37 11-74 32-106 17-25 48-59 104-77 14-5 39-11 67-11 79 0 129 55 129 103 0 33-27 80-93 80-30 0-41-13-41-27 0-20 18-42 32-42 6 0 9 6 20 4s16-9 16-17c0-17-20-39-62-39-14 0-29 2-48 8-38 11-58 38-69 55a127.4 127.4 0 0 0-6 130c22 40 66 64 113 64 65 0 83-35 96-40 23-10 44 18 44 34z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Coil';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
