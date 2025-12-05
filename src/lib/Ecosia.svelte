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
  <path d="m0 0H512V512H0" fill="none" /><circle fill="#008009" cx="256" cy="256" r="256" /><path
    fill="#F0F0EB"
    d="M388 286c34-5 92 25 45 93-31 45-100 51-131 51H279s0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c-1 31 28 125 31 135 0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0H214s0 0 0 0 0 0 0 0c0-8 1-94 11-135 0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0h-9c-49 0-127-7-148-74-31-99 43-135 74-106 0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0c-7-20-46-146 56-181 89-30 174 31 161 112 0 0 0 0 0 0s0 0 0 0 0 0 0 0 0 0 0 0c6-5 34-25 62-3 27 21 18 80-35 107 0 0 0 0 0 0s0 0 0 1c0 0 0 0 0 0s0 0 1 0Z"
  /><path fill="#008009" d="M324 144v71h-85v27h55v27h-55v27h85v71H187V144H324Z" />
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
