<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'liberapay',
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
  <path d="m0 0H512V512H0" fill="#f6c915" /><path
    fill="#fff"
    d="M209 359c-17 0-30-2-39-7-10-4-16-10-20-17-4-8-6-16-6-26s1-20 4-31l44-185 54-8-48 201-2 11c0 4 0 7 2 9 1 3 4 5 7 7l14 3-10 43M404 243c0 17-3 33-9 47a103 103 0 01-59 60 117 117 0 01-68 7l-16 63h-51l57-241a305 305 0 0171-11c13 0 24 2 34 6a63 63 0 0136 40c3 9 5 19 5 29m-127 72 15 1c9 0 17-1 25-5 7-3 13-8 19-14 5-6 9-13 12-22 3-8 4-18 4-28s-2-18-6-25c-5-7-13-11-23-11l-21 2-25 102"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'liberapay'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
