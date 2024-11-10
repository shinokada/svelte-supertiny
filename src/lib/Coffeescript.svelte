<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'coffeescript',
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
    d="M114 137c-85 34 40 64 147 64s218-27 152-61c23 27-54 45-152 45s-181-21-147-48m65 120c-83-58-132 82-28 98-127 40-99-152 9-115m-73-49c29 39 284 56 347 0-22 123-64 114-83 184-29 45-162 38-180 0-12-53-57-60-84-184m121-63c21-13-47-20-47 4s46 36 85 11c20-13 59-23 76-14s-31 30-39 9c-26 4-14 22 18 22s46-6 47-22-24-28-53-28c-58 0-65 29-98 32-16 1-25-2-25-9s28-9 36-5"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'coffeescript'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
