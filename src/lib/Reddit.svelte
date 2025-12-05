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
  <path d="m0 0H512V512H0" fill="#ff4500" /><path
    d="M304.6 119a39.8 39.8 0 10-.3-17.3 64.2 64.2 0 00-57.2 63.8v.2a191 191 0 00-92.3 27.1A55.7 55.7 0 1097 287.4c1.8 64.7 72.3 116.7 159 116.7s157.3-52 159-116.8a55.7 55.7 0 10-57.8-94.5A191.4 191.4 0 00264 165.7v-.2a47 47 0 0140.5-46.5zm-152 153.3c.9-20.2 14.3-35.7 30-35.7 15.5 0 27.4 16.4 26.5 36.6-1 20.2-12.6 27.5-28.2 27.5s-29.3-8.2-28.4-28.4zm177.2-35.7c15.6 0 29 15.5 30 35.7.9 20.2-12.8 28.4-28.4 28.4-15.6 0-27.3-7.3-28.2-27.5-1-20.2 11-36.6 26.6-36.6zM311.2 319c3 .3 4.8 3.3 3.7 6a63.6 63.6 0 01-117.5 0 4.4 4.4 0 013.7-6 550.7 550.7 0 01110.1 0z"
    fill="#fff"
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
