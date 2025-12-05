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
    fill="#4b9bd7"
    d="m198 182-100 76c-2 1.6-1.6 4.8.4 6.3l4 3c2 1.6 4.8 1.4 6.6 0l50-38c2.8-2.1 6.6-2.1 9.3 0L201 255c2.8 2.1 6 2.1 9 0l43.5-33.3c2.8-2.1 2.8-6.4.2-8.4l-41-32c-3.6-2.8-9.4-3.4-14 0m115.4 0-100 77c-2 1.6-2 4.6 0 6.1l4 3c1.9 1.5 4.6 1.5 6.5 0L282 223.3c2.8-2.1 6.6-2.1 9.3 0l56 42.8c2.8 2.1 6.6 2.1 9.3 0l35.8-27.4c2.8-2 2.8-6.3 0-8.4l-64.2-49c-3.6-2.8-9.4-3.4-14 0"
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
