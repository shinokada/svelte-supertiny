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
  <path d="M0 0h512v512H0Z" fill="#0F61FF" /><path
    fill="#fff"
    d="M391 349c-4-71-94-103-102-107l92-93v-10l-3-3H208V64l-62 13v9h3s15 0 15 16v34h-48l-2 2v22h51v118c0 37 23 63 65 59q13-1 24-8 5-4 5-10v-11c-13 9-25 8-25 8-26 0-26-33-26-33V160h122l-88 88v21l1 1c80 13 102 65 102 80 0 0 9 74-65 79 0 0-48 2-57-17l1-2q12-5 13-20c0-14-9-26-27-26-15 0-27 12-27 26 0 0-7 62 97 60 118-2 111-101 111-101"
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
