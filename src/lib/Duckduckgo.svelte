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
  viewBox="-128 -128 256 256"
  fill="#fff"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m-128-128H128V128H-128" /><circle r="108" fill="#d53" /><circle
    r="96"
    fill="none"
    stroke="#fff"
    stroke-width="7"
  /><path
    d="M-8-57s-15-6-39-5c0-7 11-7 11-7l-11-4h8M-25 90-32 87-51-6S-62-48-32-55"
    fill="#ddd"
  /><path
    d="M-27 93-48-27s-6-30 31-33c-9-8-30-3-28-5s9-4 9-4l-7-4s29-4 44 15c0 0 31 9 31 46S1-15 1 32C1 57 25 95 25 95"
  /><path
    d="M25-1l38-10c34 5-26 25-33 23C0 7 9 32 45 24s9 20-24 9C-26 20-1-3 25-1"
    fill="#fc0"
  /><path
    d="M15 78l2-3c22 8 23 11 22-9s0-20-23-3c0-5-13-3-15 0-21-9-23-12-22 2 2 29 1 24 21 14"
    fill="#6b5"
  /><path d="M1 65S1 77 2 78s13-2 14-1S2 82-1 79V66" fill="#4a4" /><path
    d="M14-16a6 6 0 110 1m6-3a2 2 0 100-1m-52 6a7 7 0 110 1m8-3a2 2 0 100-1M9-32c4-3 10-3 14-1-3-6-13-5-14 1m-32 0c-7-3-14 3-15 7-3-8 10-13 15-7"
    fill="#148"
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
