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
  <path d="M0 0h512v512H0z" fill="#fff" /><circle cx="256" cy="256" r="256" fill="#D75D2C" /><path
    fill="#FEFEFE"
    d="M430 214s-35-46-80-49c-29-1-37 2-38 5-2-15-15-84-102-99 11 82 57 60 84 117 0 0-46-64-122-40 0 0 28 58 110 70l8 26s-126-66-164 61c-29-7-39 25-6 46 0 0 6-22 19-29 0 0-29 33 5 72h124c3-5 16-31-16-51 23 0 42 43 62 51h30c1-2 3-9-2-16-8-9-25-8-24-24 6-74 116-51 113-141Z"
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
