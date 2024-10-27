<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'mail',
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
  <path d="m0 0H512V512H0" fill="#328cff" /><path
    d="M249 149c-57 0-108 52-108 110 0 57 51 108 108 108 30 0 57-12 77-32v11c0 33 43 55 71 32 64-49 68-177 2-246-62-65-166-78-244-32C52 163 50 280 88 348c57 99 180 101 225 82 29-13 16-51-12-39-56 23-149 0-182-76-30-68 1-142 49-175 46-32 131-41 195 15 68 59 39 162 14 187-6 7-17 1-16-9V183c0-23-35-23-35-1-20-20-47-33-77-33m1 37c38 0 72 27 72 71 0 43-30 75-73 75-39 0-68-28-68-72 0-39 23-74 69-74Z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'mail'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
