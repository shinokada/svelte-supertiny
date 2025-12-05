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
    fill="#25d366"
    d="m79 434 25.7-93.9a181.1 181.2 0 1170.3 68.7M122.5 391l57-15a150.6 150.6 0 10-41.8-40.6m93-127c2 5 0 10-11 22.2-6 6-4 8 6.6 23s28 29 44 36.5 15 7 21.7-1c15-17 11-21 26-14.2l27 13c8 4 8.4 4 8.5 9s-1.7 18-7 23.6-25 24.8-60 12-59-23-99-77-1.6-86 3.6-88 7-1.5 17-1.3q4 0 7 5"
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
