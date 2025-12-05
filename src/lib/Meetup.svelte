<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    class: classname,
    title,
    desc,
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><path
    fill="#ff4a79"
    d="M118 89q-17 11-23 27-3 6 5 5c12 0 56-19 64-27q12-11-17-10c-17 0-20 1-29 5m156 1c-55 6-122 26-149 44-23 15-39 39-45 62-4 21 2 50 15 70l7 12-5 19c-4 15-5 22-5 42-1 23 0 26 5 36 11 23 39 43 68 49 22 4 39 1 70-11q55-21 104-32c41-10 58-20 69-40 7-16 8-28 2-50l-4-18 5-7c8-10 16-28 20-43A108 108 0 00352 93c-18-4-56-5-78-3m-51 92 13 6q11 6 15 2c2-4 17-10 24-10s19 5 25 10l4 5 12-7q12-5 20-6 14 1 23 14c4 8 3 17-6 49q-12 38-5 40l8 3q14 4 0 14c-17 9-39 7-46-5-5-8-5-18 1-40 6-24 7-29 1-31q-8-3-13 5l-10 32c-9 33-10 36-18 40-12 6-25 2-30-8-3-7-3-8 2-32 9-33 8-40-3-40-7 0-10 7-21 47l-14 42c-5 9-19 16-31 16-26 0-37-20-26-49l11-39c11-39 18-49 38-56 12-4 16-5 26-2m115 216c-33 7-63 19-63 26q2 6 42 5c23 0 30-1 39-5 13-5 25-17 25-24-1-4-2-5-13-5z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop class: classname
@prop title
@prop desc
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
