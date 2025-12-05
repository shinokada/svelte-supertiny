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
    d="M433 320a184 184 0 011 8H74a181 181 0 011-10 180 180 0 0118-54 180 180 0 0113-21 182 182 0 0120-23 182 182 0 0132-26l-11-19-18-32a17 17 0 01-2-13 16 16 0 018-10 16 16 0 017-2 17 17 0 0116 8 10000 10000 0 008 13l11 18 11 19 1 2 6-2a180 180 0 0158-10h2c22 0 44 4 64 11l2 1 1-2 11-19 11-18 8-13a17 17 0 0110-8 17 17 0 016 0 17 17 0 017 2 16 16 0 016 6 17 17 0 012 14l-1 3a9000 9000 0 01-8 13l-11 18-11 19a181 181 0 0132 25 181 181 0 0120 23 182 182 0 0113 21 180 180 0 0118 54v2Z"
    fill="#34a853"
  /><path
    d="M350 276c7-5 8-16 2-25s-17-12-24-7-8 16-2 25 17 12 24 7m-163-7c6-9 5-20-2-25s-18-1-24 7c-6 9-5 20 2 25s18 1 24-7"
    fill="#202124"
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
