<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'elastic',
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
  <path d="m0 0H512V512H0" fill="none" /><path
    d="M188.8 180.3l15.1-76.9a101.6 99.7 0 01183.5 76l-90.9 78.1-90.1-40.3Z"
    fill="#ffd00a"
  /><path
    d="m113.1 310.8a103.4 101.4 0 00-2 19.9 101.9 99.9 0 00186.1 56.2l15-76.7-20-37.5-90.5-40.4z"
    fill="#20b9af"
  /><path d="m112.6 157.9 61.7 14.3 13.5-68.9a48.8 47.8 0 00-75.2 54.6" fill="#ee5096" /><path
    d="M174.9 188l15.9 33.3-86.6 76.8a68.1 66.8 0 013-125.8Z"
    fill="#12a5df"
  /><path d="m313.1 386.9a48.7 47.8 0 0075.1-54.5l-61.7-14.2z" fill="#90c640" /><path
    d="M307.6 268.7l88.8-76.4a68 66.7 0 0143.9 62.3A68.7 67.4 0 01393.5 318l-67.9-15.6Z"
    fill="#05799f"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'elastic'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
