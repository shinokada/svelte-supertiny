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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 512 512"
  fill="#00979d"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    fill="#00979d"
    d="M449 256c0 106.6-86.5 193-193 193-106.6 0-193-86.5-193-193S149.5 63 256 63c106.6 0 193 86.5 193 193h0Z"
  /><path
    fill="#fff"
    d="M330 325c-4 0-7-0-11-1-31-4-51-26-63-43-12 17-32 39-63 43-4 1-7 1-11 1-19 0-37-7-50-20-14-13-21-30-21-49s8-36 21-49c14-13 31-20 51-20 4 0 7 0 11 1 31 4 51 26 63 43 12-17 32-39 63-43 4-1 7-1 11-1 19 0 37 7 50 20 14 13 21 30 21 49s-8 36-21 49c-14 13-31 20-50 20m-60-69c6 11 24 40 53 44 3 0 5 1 8 1 26 0 47-20 47-45s-21-45-47-45c-3 0-5 0-8 1-29 4-47 33-53 44m-87-45c-26 0-47 20-47 45s21 45 47 45c3 0 5-0 8-1 29-4 47-33 53-44-6-11-24-40-53-44-3-0-5-1-8-1"
  /><path
    fill="#fff"
    d="M162.6 249h43v13.8h-43v-13.8Zm186.4 0h-14.6v-14.6h-13.9v14.6h-14.5v13.8h14.5v14.6h13.9v-14.6h14.6v-13.8Z"
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
