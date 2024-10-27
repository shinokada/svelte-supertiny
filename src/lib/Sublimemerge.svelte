<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'sublimemerge',
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
  <path d="m0 0H512V512H0" fill="#424242" /><path
    d="M279 307c-1.6.1-3.4-.3-4.9-1.3L98.8 183c-3.4-2.4-4.3-7.2-1.8-10.7l49.4-70.5c2.4-3.4 7.2-4.3 10.7-1.8l151.1 105.8"
    fill="#88d9d9"
  /><path
    d="M279 206h116.7c2 0 3.9.8 5.3 2.1.1.1 1.7 1.6 4 4.1l39 39c3 3 3 7.9 0 10.9l-36.8 36.8c-3.3 3.6-5.8 5.9-6 6.1-1.4 1.4-3.3 2.3-5.5 2.3H308L157 413c-3.4 2.4-8.3 1.5-10.7-1.8l-49.4-70.5c-2.4-3.4-1.5-8.3 1.8-10.7L274 207.3c1.5-1 3.2-1.5 4.9-1.3"
    fill="#00e6e7"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'sublimemerge'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
