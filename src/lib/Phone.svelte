<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'phone',
    class: classname,
    title,
    desc,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $state(`${title?.id || ''} ${desc?.id || ''}`);
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label={ariaLabel}
  {role}
  viewBox="0 0 512 512"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="#20df40" /><path
    fill="#fff"
    d="M395 338c-10-9-22-17-33-23-23-16-43-17-59 6-10 14-23 16-37 10-39-18-68-43-84-82-8-16-8-31 10-42 9-6 19-14 18-28-1-18-44-78-62-84-8-2-14-2-22 0-41 14-57 46-42 85a451 451 0 00251 248l17 5c26 0 57-25 67-50 9-24-10-34-24-45z"
  /><path
    fill="none"
    stroke="#fff"
    stroke-linecap="round"
    stroke-width="17"
    d="M268 138s41-1 72 30c31 30 27 74 27 74m-87-63s18-2 33 14c15 15 13 34 13 34M255 98s64-3 111 44c47 48 43 114 43 114"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'phone'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
