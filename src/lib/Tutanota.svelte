<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'tutanota',
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
    d="m113 97c-17 0-31 14.1-31.5 31.5V419c0 1.1.1 2.2.2 3.3a1700 1700 0 0037-14c91-36 165-67 165-102 0-1.1-.1-2.2-.2-3.4-4.7-34.5-87.2-45-87-61 0-.8.2-1.7.8-2 9-17 49-16 63-17s48-1 50-11.3c0-.3.1-.6.1-1 0-9-23-13-23-13s28 4 28 15c0 .5-.1 1.1-.2 1.7-3.1 11-28 14-44 14-15.6.8-39 2-39 10.2 0 .4.1.9.2 1 3 11 90 16 146 45 32 16 48 44 55 73V128c0-17-14-31-31-31H113z"
    fill="#a01e20"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'tutanota'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
