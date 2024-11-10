<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'rockstar',
    class: classname,
    title,
    desc,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $state(`${title?.id || ''} ${desc?.id || ''}`);
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label={ariaLabel}
  {role}
  viewBox="0 0 512 512"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><path
    fill="orange"
    d="M172 112h203c34 0 60 26 60 57v191c0 31-26 57-60 57H172c-34 0-61-26-61-57V169c0-31 27-57 61-57z"
  /><path
    d="M375 420H172c-35 0-64-27-64-60V169c0-33 29-61 64-61h203c36 0 64 27 64 61v191c0 33-28 60-64 60zM172 117c-31 0-57 23-57 52v191c0 30 26 53 57 53h203c31 0 56-24 56-53V170c0-29-25-53-56-53H172z"
  /><path
    d="M225 164h62c13 0 22 2 29 6 8 6 12 15 12 27 0 21-10 32-29 35 8 2 13 9 13 22v23c0 6 0 12 3 16h-34l-2-10 1-22c0-11-6-17-16-17h-22l-10 46h-32l25-126zm53 26h-24l-7 31h26c15 0 23-6 23-18 0-9-6-13-18-13z"
  /><path d="m319 293 24-42 8 43h41l-38 26 6 42-32-26-43 27 19-45-23-25h38Z" /><path
    fill="#FFF"
    d="m348 317 24-17h-27l-4-32-18 32h-27l16 17-13 31 30-18 23 18-4-31z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'rockstar'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
