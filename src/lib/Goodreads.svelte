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
  <path d="M0 0h512v512H0" fill="#eae1d6" /><path
    d="M333 82c-6 2-11 9-21 28-5 8-8 13-9 13-2 1-9-1-16-4-12-6-17-6-33-6s-21 1-32 6c-18 8-27 15-36 29-20 29-18 63 4 92 5 6 8 11 8 13s-5 9-10 17c-18 26-20 36-10 47 8 8 19 11 52 9 27-2 57 0 65 5 10 6 12 18 3 26-5 5-8 5-37 6-17 1-41 0-53-2-17-2-22-2-27 1-8 3-12 11-8 18 4 8 16 9 76 8 52-1 57-2 67-7 15-6 23-18 24-33 1-15-2-23-13-33-14-12-26-14-78-14-44 0-45 0-45-5s12-21 18-26c2-2 7-1 19 1 29 6 57-1 77-18 32-28 36-70 11-101-3-3-5-8-5-10s8-10 18-18c10-8 20-16 21-18 8-14-8-32-25-26m-56 58c16 5 28 23 28 40 0 24-17 54-37 65-35 20-77-8-69-46 5-25 22-47 41-56 10-5 27-6 37-3"
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
