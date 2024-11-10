<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'gradle',
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
    d="M427 132.7a61 61 0 00-85-1 6 6 0 000 9l7 8a6 6 0 008 1 35 35 0 0146 53c-48 48-113-87-259-17a20 20 0 00-9 28l25 43a20 20 0 0027 7h1l11-6a257 257 0 0035-26 6 6 0 018 0 6 6 0 010 9 263 263 0 01-37 28l-11 6a31 31 0 01-15 4 32 32 0 01-28-16L126 219c-45 40-73 95-57.87 173.26a6 6 0 006 4.74H100.6a6 6 0 005.93-5.3 40 40 0 0178.62 0 6 6 0 005.72 5.08h26.2a6 6 0 005.7-5.1 40 40 0 0178.6 0 6 6 0 005.7 5h26a6 6 0 005.8-5.72c1-37 10-79 38.7-100 98-73 72-136 49.4-158.3zm-100 110-19-9a12 12 0 1119 9z"
    fill="#02303a"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'gradle'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
