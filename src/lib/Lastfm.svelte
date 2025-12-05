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
  <path d="m0 0H512V512H0" fill="#e11c23" /><path
    d="m235.4 332.9s-21 21-65 21c-55 0-85-32-85-92 0-62 31-98 88-98 52 0 78 19 95 70l13 39c9 29 26 49 65 49 27 0 41-6 41-20 0-11-7-20-27-24l-27-6c-32-8-45-25-45-51 0-43 34-56 70-56 40 0 64 14 67 50l-39 5c-2-17-12-24-31-24-17 0-28 8-28 21 0 12 5 19 22 23l25 6c34 8 52 24 52 56 0 39-33 54-81 54-68 0-91-31-104-68l-13-39c-9-29-20-51-55-51-24 0-48 17-48 65 0 38 19 61 46 61 31 0 51-23 51-23l13 32"
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
