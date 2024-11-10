<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'skype',
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
  <path d="m0 0H512V512H0" fill="#0078D7" /><path
    fill="#fff"
    d="M87 226a171 171 0 00199 199c109 53 185-64 139-139 23-132-98-220-199-199A102 102 0 0087 226m241-42c16 23-16 41-28 27-16-18-32-27-49-26-44 3-43 40-5 45 52 8 99 22 95 68-5 52-47 67-90 64-52-4-68-22-78-41-12-23 22-45 36-20 23 37 65 32 78 17 20-23-1-37-23-41-24-5-49-10-68-20-30-16-43-92 36-105 36-6 79 5 96 32"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'skype'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
