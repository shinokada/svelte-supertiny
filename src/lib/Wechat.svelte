<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'wechat',
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
  fill="#fff"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="#00c70a" /><path
    d="M402 369c23-17 38-42 38-70 0-51-50-92-111-92s-110 41-110 92 49 92 110 92c13 0 25-2 36-5 4-1 8 0 9 1l25 14c3 2 6 0 5-4l-6-22c0-3 2-5 4-6m-110-85a15 15 0 110-29 15 15 0 010 29m74 0a15 15 0 110-29 15 15 0 010 29"
  /><path
    d="M250 198a18 18 0 000-35 18 18 0 100 35m-89 0a18 18 0 000-35 18 18 0 100 35m44-93c66 0 121 41 131 93-64-4-147 44-123 128-3 0-25 2-51-6-4-1-8 0-11 2l-30 17c-3 1-7-1-6-6l7-24c1-5-1-8-4-10-28-20-45-50-45-83 0-61 59-111 132-111"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'wechat'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
