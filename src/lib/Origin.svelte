<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'origin',
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
  <path d="m0 0H512V512H0" fill="none" /><g fill="#f15a23"
    ><path
      d="m256 100.4c85.9 0 155.6 69.7 155.6 155.6S341.9 411.6 256 411.6 100.4 341.9 100.4 256 170.1 100.4 256 100.4zm0 94.9c33.5 0 60.7 27.2 60.7 60.7s-27.2 60.7-60.7 60.7-60.7-27.2-60.7-60.7 27.2-60.7 60.7-60.7z"
    /><path
      d="m256 53.7c1.5-4 0-5.5-4-5.9-4.5-1.5-87.4 46.6-124.1 119.3C91.1 240 236 101.8 236 101.8c7.4-27 8.7-31.4 20.1-48zm.1 404.5c-1.5 4 0 5.5 4 6 4.5 1.5 87.5-46.4 124.3-119.1 36.9-72.8-108.2 65.1-108.2 65.1-7.4 27-8.8 31.4-20.2 48z"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'origin'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
