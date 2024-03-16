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
    ariaLabel = 'Ubiquiti',
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
  aria-label="Ubiquiti"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#399cdb" /><path
    d="M112 94v18h18V94h-18zm288 0c-82 0-90 31-90 61v172a147 147 0 01-3 28c43-9 72-36 86-82l7-23V94zm-234 18v18h18v-18h-18zm-18 18v18h18v-18h-18zm36 9v18h18v-18h-18zm-72 4v147c0 73 53 128 144 128 0 0-54-30-54-91V197h-18v66h-18v-39h-18v17h-18v-98h-18zm54 18v18h18v-18h-18zm-18 27v18h18v-18h-18zm252 87c-19 64-65 92-131 89-24-1-43-7-57-16 10 42 46 63 48 64l10 6c82-5 130-59 130-128v-15z"
    {fill}
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Ubiquiti';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
