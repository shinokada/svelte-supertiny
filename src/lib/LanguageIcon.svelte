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
    d="M359 402l-12 34-22-37m68-238 28 9V398L257 345 90 399V163l36-12V74l119 39L393 64"
  /><path
    fill="#fff"
    d="M385 75 257 117l128 41M248 119 98 168V388l150-49m80-158-47 115 22 7 10-24 46 14 7 29 22 7-39-141m-166-1c2 0 4 1 4 4 1 4 0 5-1 6-2 4-7 7-10 8-4 1-9 3-13 2-2 0-6 0-11-5-3-3-5-10-4-10l10 2 13-4a87 87 0 0112-3Zm29 17 1 1-1 7-12 24-16 28 13 6 31 13c1 1 4 10 3 12a223 223 0 01-32-15l-17-13c-8 12-18 26-29 39-4 4-16 19-23 23-1 1-7 2-8 1l18-19c5-7 31-42 35-50l19-38-24 7-17 5-1 4-6 3H136c-3 0-6-3-7-4l-1-5 12-2 23-7 22-8 19-9 8-3Zm126 15 13 48-30-9"
  /><path
    d="M160 418a170 170 0 00178 0"
    fill="none"
    stroke="#000"
    stroke-linecap="round"
    stroke-width="8"
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
