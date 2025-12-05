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
  <path d="m0 0H512V512H0" fill="#faff69" /><path
    d="M100 94c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v324c0 2.2-1.8 4-4 4h-29c-2.2 0-4-1.8-4-4zm73.65 0c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v324c0 2.2-1.8 4-4 4h-29c-2.2 0-4-1.8-4-4zm73.65 0c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v324c0 2.2-1.8 4-4 4h-29c-2.2 0-4-1.8-4-4zm73.65 0c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v324c0 2.2-1.8 4-4 4h-29c-2.2 0-4-1.8-4-4zm73.65 129c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v66c0 2.2-1.8 4-4 4h-29c-2.2 0-4-1.8-4-4"
    fill="#1e1e1e"
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
